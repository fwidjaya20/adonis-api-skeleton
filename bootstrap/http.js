'use strict';

const { Ignitor } = require('@adonisjs/ignitor');

class HttpIgnitor extends Ignitor {

    constructor() {
        super(require('@adonisjs/fold'));

        /**
         * Files to be preloaded
         *
         * @type {Array}
         */
        this._preLoadFiles = [
            'app/Providers/routes',
            'app/Core/Http/kernel',
        ];
    }

}

module.exports = HttpIgnitor;
