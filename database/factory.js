'use strict';

const Factory = use('Factory');

Factory.blueprint('App/Domains/Todo/Models/Todo', (faker) => {
    return {
        todo: faker.username(),
    }
});
