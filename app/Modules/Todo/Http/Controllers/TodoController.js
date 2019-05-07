'use strict';

const Controller = use('Controller');

const TodoRepo = use('App/Domains/Todo/Repositories/TodoRepository');

class TodoController extends Controller {

    async getAllTodos({request, response}) {
        const todos = await new TodoRepo().fetchTodos()
            .catch((error) => {
                this.errorResponse(response, 500, error.stack);
            });

        this.arrayResponse(response, 200, todos);
    }

}

module.exports = TodoController;
