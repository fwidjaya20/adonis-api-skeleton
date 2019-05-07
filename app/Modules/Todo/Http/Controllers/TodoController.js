'use strict';

const Controller = use('Controller');

const TodoRepo = use('App/Domains/Todo/Repositories/TodoRepository');

class TodoController extends Controller {

    async getAllTodos({request, response}) {
        let { page, limit, search } = request.qs;

        await TodoRepo.fetchTodos(page, limit, search)
            .then((todos) => {
                this.paginateResponse(response, 200, todos);
            })
            .catch((error) => {
                this.errorResponse(response, 500, error.stack);
            });
    }

    async createNewTodo({request, response}) {
        await TodoRepo.create(request.body)
            .then((todo) => {
                this.dataResponse(response, 201, todo);
            })
            .catch((error) => {
                this.errorResponse(response, 500, error.stack);
            });
    }

    async updateTodo({request, response}) {
        const { id } = request.params;

        await TodoRepo.update(id, request.body)
            .then((todo) => {
                this.dataResponse(response, 200, todo);
            })
            .catch((error) => {
                this.errorResponse(response, 500, error.message)
            });

    }

    async deleteTodo({request, response}) {
        const {id} = request.params;

        await TodoRepo.delete(id)
            .then((todo) => {
                this.dataResponse(response, 200, todo);
            })
            .catch((error) => {
                this.errorResponse(response, 500, error.message)
            });
    }

}

module.exports = TodoController;
