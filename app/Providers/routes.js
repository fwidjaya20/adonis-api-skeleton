'use strict';

/*
|--------------------------------------------------------------------------
| Router
|--------------------------------------------------------------------------
|
| AdonisJs Router helps you in defining urls and their actions. It supports
| all major HTTP conventions to keep your routes file descriptive and
| clean.
*/

const Router = require('../Core/Http/router');

const modules = [
    'Todo'
];

Router.registerModules(modules);
