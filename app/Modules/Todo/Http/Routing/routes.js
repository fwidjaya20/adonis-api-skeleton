'use strict';

const isGroup = true;
const groupName = 'todos';
const groupMiddleware = null;
const routes = [
    {
        url: '/',
        verbs: ['GET'],
        action: 'index',
        middleware: null
    }
];

module.exports = { isGroup, groupName, groupMiddleware, routes };
