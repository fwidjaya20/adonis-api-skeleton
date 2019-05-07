'use strict';

const isGroup = true;
const groupName = 'todos';
const groupMiddleware = null;
const routes = [
    {
        url: '/',
        verbs: ['GET'],
        action: 'getAllTodos',
        middleware: null
    },
    {
        url: '/',
        verbs: ['POST'],
        action: 'createNewTodo',
        middleware: null
    },
    {
        url: '/:id',
        verbs: ['PUT', 'PATCH'],
        action: 'updateTodo',
        middleware: null
    },
    {
        url: '/:id',
        verbs: ['DELETE'],
        action: 'deleteTodo',
        middleware: null
    }
];

module.exports = { isGroup, groupName, groupMiddleware, routes };
