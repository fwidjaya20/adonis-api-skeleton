'use strict';

const Repository = use('Repository');

const Todo = use('App/Domains/Todo/Models/Todo');

class TodoRepository extends Repository {

    static async fetchTodos(page = 1, limit = 10, search) {
        let todos = Todo.query();

        if (search) {
            todos.where('todo', 'ILIKE', `%${search}%`);
        }

        todos = await todos.paginate(page, limit);

        return Promise.resolve(todos);
    }

    static async create(payload = {}) {
        const newTodo = new Todo();

        newTodo.todo = payload.todo;

        if (await newTodo.save()) {
            return Promise.resolve(newTodo);
        }

        throw Error('Failed to create todo');
    }

    static async update(id, payload = {}) {
        const obj = await Todo.find(id);

        if (!obj) {
            throw Error(`Todo with id '${id}' not found!`);
        }

        obj.todo = payload.todo;

        if (await obj.save()) {
            return Promise.resolve(obj);
        }

        throw Error(`Failed to update todo`);
    }

    static async delete(id) {
        const obj = await Todo.find(id);

        if (!obj) {
            throw Error(`Todo with id '${id}' not found!`);
        }

        if (await obj.delete()) {
            return Promise.resolve(obj);
        }

        throw Error(`Failed to delete todo`);
    }

}

module.exports = TodoRepository;
