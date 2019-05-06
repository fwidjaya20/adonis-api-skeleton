'use strict'

const { Command } = require('@adonisjs/ace')

class Example extends Command {
  static get signature () {
    return 'example'
  }

  static get description () {
    return 'Tell something helpful about this command'
  }

  async handle (args, options) {
    this.info('Dummy implementation for example command')
  }
}

module.exports = Example
