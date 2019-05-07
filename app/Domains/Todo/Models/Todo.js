'use strict';

const Model = use('Model');

class Todo extends Model {
    static get table() {
        return 'todos';
    }

    static get primaryKey() {
        return 'id';
    }

    static get hidden() {
        return ['created_at', 'updated_at'];
    }

    static get computed() {
        return ['thumbnail'];
    }

    getThumbnail({ todo }) {
        return Math.random() >= 0.5 ? 'placeholder' : `${todo} image`;
    }
}

module.exports = Todo;

