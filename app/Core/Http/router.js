'use strict';

const Helpers = use('Helpers');
const Ioc = require('@adonisjs/fold').Ioc;
const Route = use('Route');

class Router {

    registerModules(modules) {
        let moduleRoutes;

        modules.forEach(module => {
            moduleRoutes = require(`../../Modules/${module}/Http/Routing/routes`);

            if (moduleRoutes.isGroup) {
                this.registerGroupRoutes(moduleRoutes, module);
                return;
            }

            moduleRoutes.routes.forEach(route => registerRoute(route, module));
        })
    }

    registerGroupRoutes (moduleRoutes, module) {
        let routesGroup = Route.group(moduleRoutes.groupName, function () {
            moduleRoutes.routes.forEach(route => registerRoute(route, module));
        }).prefix(moduleRoutes.groupName);

        if (moduleRoutes.groupMiddleware) {
            routesGroup.middleware(moduleRoutes.groupMiddleware);
        }
    }
}

function registerRoute(route, module) {
    let controllerName = `../../Modules/${module}/Http/Controllers/${module}Controller`;

    let newRoute = Route.route(route.url, `${controllerName}.${route.action}`, route.verbs);

    if (route.middleware) {
        newRoute.middleware(route.middleware);
    }
}

module.exports = new Router();
