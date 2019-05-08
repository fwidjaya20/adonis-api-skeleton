'use strict';

const Helpers = use('Helpers');
const BaseCommand = use('BaseCommand');

class ModuleCommand extends BaseCommand {

    /**
     * returns signature to be used by ace
     * @return {String}
     *
     * @public
     */
    static get signature () {
        return `make:module {name}`;
    }

    /**
     * returns description to be used by ace as help command
     * @return {String}
     *
     * @public
     */
    static get description () {
        return 'Create a new Module'
    }

    /**
     * handle method will be executed by ace. Here we
     * create the command inside commands directory.
     * @param  {Object} args
     * @param  {Object} options
     *
     * @public
     */
    async handle(args, options) {
        const modulePath = Helpers.appRoot(`app/Modules/${args.name}`);

        await this.createModules(args.name)
            .then(() => {
                console.log(`${this.icon('success')} ${args.name} Module is generated on '${modulePath}'`);
            })
            .catch((error) => {
                console.log(`${this.icon('error')} Failed to generate ${args.name} Module`);
                console.error(error.stack);
            });
    }

    async createModules(moduleName) {
        await this.createController(moduleName);
        await this.createRouting(moduleName);
        await this.createResource(moduleName);
        await this.createService(moduleName);
    }

    async createController(moduleName) {
        const controller = Helpers.appRoot(`app/Modules/${moduleName}/Http/Controllers/${moduleName}Controller.js`);

        const template = 'controller';
        const templateOptions = {
            methods: ['index', 'create', 'store', 'show', 'edit', 'update', 'destroy'],
            name: `${moduleName}Controller`
        };

        await this.write(template, controller, templateOptions);
    }

    async createRouting(moduleName) {
        const routing = Helpers.appRoot(`app/Modules/${moduleName}/Http/Routing/routes.js`);

        const template = 'routes';

        await this.write(template, routing);
    }

    async createResource(moduleName) {
        const resources = Helpers.appRoot(`app/Modules/${moduleName}/Resources/.gitkeep`);

        await this.writeFile(resources, '', {});
    }

    async createService(moduleName) {
        const service = Helpers.appRoot(`app/Modules/${moduleName}/Services/${moduleName}Service.js`);

        const template = 'service';
        const templateOptions = {
            name: `${moduleName}Service`
        };

        await this.write(template, service, templateOptions);
    }

}

module.exports = ModuleCommand;
