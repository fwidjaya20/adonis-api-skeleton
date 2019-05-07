'use strict';

const Helpers = use('Helpers');
const hogan = require('hogan.js');
const { Command } = use('@adonisjs/ace');

class BaseCommand extends Command {

    /**
     * makes path to a given template
     * @param  {String} template
     * @return {String}
     *
     * @private
     */
    _makeTemplatePath(template) {
        return Helpers.appRoot(`app/Core/Commands/Templates/${template}.mustache`);
    }

    /**
     * returns contents for a given template
     * @param  {String} template
     * @return {String}
     *
     * @private
     */
    async _getContents(template) {
        const templatePath = this._makeTemplatePath(template);

        return await this.readFile(templatePath, 'utf-8');
    }

    /**
     * writes template contents to a given destination.
     *
     * @param  {String} template
     * @param  {String} dest
     * @param  {Object} options
     * @return {String}
     *
     * @public
     */
    async write (template, dest, options = {}) {
        const hasFile = await this.pathExists(dest);

        if (hasFile) {
            throw new Error(`I'm afraid '${dest}' already exists!`);
        }

        const contents = await this._getContents(template);
        const compiledContent = hogan.compile(contents);

        await this.writeFile(dest, compiledContent.render(options), {});
    }

}

module.exports = BaseCommand;
