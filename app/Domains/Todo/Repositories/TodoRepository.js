'use strict';

const Repository = use('Repository');

const Todo = use('App/Domains/Todo/Models/Todo');

class TodoRepository extends Repository {

    async fetchTodos() {
        return await Todo.all();
    }

}

module.exports = TodoRepository;
