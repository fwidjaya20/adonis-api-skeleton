'use strict'

const { LogicalException } = require('@adonisjs/generic-exceptions')

class ExampleException extends LogicalException {
  /**
   * Handle this exception by itself
   */
  // handle () {}
}

module.exports = ExampleException
