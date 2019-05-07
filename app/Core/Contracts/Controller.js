'use strict';

class Controller {
    dataResponse(response, statusCode = 200, data) {
        response
            .status(statusCode)
            .json({
                data: data
            });
    }

    paginateResponse(response, statusCode = 200, data) {
        const { rows, pages } = data;

        response
            .status(statusCode)
            .json({
                data: rows,
                metadata: {
                    total: pages.total,
                    limit: pages.perPage,
                    lastPage: pages.lastPage
                }
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
