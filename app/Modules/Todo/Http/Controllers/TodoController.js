'use strict';

const Controller = use('Controller');

/**
 * Here you can use your Domain Layer or using your RPC/REST for integrate into your other services
 */

class TodoController extends Controller {
    index({request, response}) {
        response
            .status(200)
            .json({
                message: 'Successfully Access Todo Controller'
            });
    }
}

module.exports = TodoController;
