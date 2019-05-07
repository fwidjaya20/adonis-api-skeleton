'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class TodosSchema extends Schema {
    up () {
        this.create('todos', (table) => {
            table.increments();
            table.string('todo', 150).notNullable();
            table.timestamps();
        })
    }

    down () {
        this.drop('todos');
    }
}

module.exports = TodosSchema;
