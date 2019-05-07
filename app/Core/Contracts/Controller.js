'use strict';

class Controller {
    arrayResponse(response, statusCode = 200, data) {
        response
            .status(statusCode)
            .json({
                data: data
            });
    }

    errorResponse(response, statusCode = 500, errorMessage = '') {
        response
            .status(statusCode)
            .json({
                message: errorMessage
            });
    }
}

module.exports = Controller;
