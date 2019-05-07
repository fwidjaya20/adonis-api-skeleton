'use strict';

const { Ignitor } = require('@adonisjs/ignitor');

class AceIgnitor extends Ignitor {

    constructor() {
        super(require('@adonisjs/fold'));
    }

}

module.exports = AceIgnitor;
