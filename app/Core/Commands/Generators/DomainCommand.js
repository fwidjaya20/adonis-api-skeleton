'use strict';

const Helpers = use('Helpers');
const BaseCommand = use('BaseCommand');

class DomainCommand extends BaseCommand {

    /**
     * returns signature to be used by ace
     * @return {String}
     *
     * @public
     */
    static get signature () {
        return `make:domain {name}`;
    }

    /**
     * returns description to be used by ace as help command
     * @return {String}
     *
     * @public
     */
    static get description () {
        return 'Create a new Domain'
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
        const domainPath = Helpers.appRoot(`app/Domains/${args.name}`);

        await this.createDomains(args.name)
            .then(() => {
                console.log(`${this.icon('success')} ${args.name} Domain is generated on '${domainPath}'`);
            })
            .catch((error) => {
                console.log(`${this.icon('error')} Failed to generate ${args.name} Domain`);
                console.error(error.stack);
            });
    }

    async createDomains(domainName) {
        await this.createModel(domainName);
        await this.createRepository(domainName);
        await this.createValidator(domainName);
    }

    async createModel(moduleName) {
        const model = Helpers.appRoot(`app/Domains/${moduleName}/Models/${moduleName}.js`);

        const template = 'model';
        const templateOptions = {
            name: `${moduleName}`
        };

        await this.write(template, model, templateOptions);
    }

    async createRepository(moduleName) {
        const model = Helpers.appRoot(`app/Domains/${moduleName}/Repositories/${moduleName}Repository.js`);

        const template = 'repository';
        const templateOptions = {
            name: `${moduleName}Repository`
        };

        await this.write(template, model, templateOptions);
    }

    async createValidator(moduleName) {
        const validator = Helpers.appRoot(`app/Domains/${moduleName}/Validators/.gitkeep`);

        await this.writeFile(validator, '', {});
    }

}

module.exports = DomainCommand;
