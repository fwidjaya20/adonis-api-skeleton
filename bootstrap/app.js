'use strict';

/*
|--------------------------------------------------------------------------
| Providers
|--------------------------------------------------------------------------
|
| Providers are building blocks for your Adonis app. Anytime you install
| a new Adonis specific package, chances are you will register the
| provider here.
|
*/
const providers = [
  '@adonisjs/framework/providers/AppProvider',
  '@adonisjs/auth/providers/AuthProvider',
  '@adonisjs/bodyparser/providers/BodyParserProvider',
  '@adonisjs/cors/providers/CorsProvider',
  '@adonisjs/lucid/providers/LucidProvider'
];

/*
|--------------------------------------------------------------------------
| Ace Providers
|--------------------------------------------------------------------------
|
| Ace Providers are required only when running ace commands. For example
| Providers for migrations, tests etc.
|
*/
const aceProviders = [
  '@adonisjs/lucid/providers/MigrationsProvider'
];

/*
|--------------------------------------------------------------------------
| Aliases
|--------------------------------------------------------------------------
|
| Aliases are short unique names for IoC container bindings. You are free
| to create your own aliases.
|
| For example:
|   { Route: 'Adonis/Src/Route' }
|
*/
const aliases = {
    Command: 'Adonis/Src/Command',
    Config: 'Adonis/Src/Config',
    Database: 'Adonis/Src/Database',
    Env: 'Adonis/Src/Env',
    Event: 'Adonis/Src/Event',
    Factory: 'Adonis/Src/Factory',
    Hash: 'Adonis/Src/Hash',
    Helpers: 'Adonis/Src/Helpers',
    Lucid: 'Adonis/Src/Lucid',
    Middleware: 'Adonis/Src/Middleware',
    Route: 'Adonis/Src/Route',
    Schema: 'Adonis/Src/Schema',
    View: 'Adonis/Src/View',
    Ws: 'Adonis/Addons/Ws',
    Controller: 'App/Core/Contracts/Controller',
    Service: 'App/Core/Contracts/Service',
    Repository: 'App/Core/Contracts/Repository',
    BaseCommand: 'App/Core/Commands/Generators/BaseCommand'
};

/*
|--------------------------------------------------------------------------
| Commands
|--------------------------------------------------------------------------
|
| Here you store ace commands for your package
|
*/
const commands = [
    'App/Core/Commands/Generators/ModuleCommand',
    'App/Core/Commands/Generators/DomainCommand',
];

module.exports = { providers, aceProviders, aliases, commands };
