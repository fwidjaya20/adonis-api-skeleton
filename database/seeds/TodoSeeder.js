'use strict';

const Factory = use('Factory');

class TodoSeeder {
    async run () {
        await Factory
            .model('App/Domains/Todo/Models/Todo')
            .createMany(100);
    }
}

module.exports = TodoSeeder;
