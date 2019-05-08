# Adonis API application

[Adonis API Application](https://gitlab.com/f.widjaya20/adonis-api-skeleton) is the boilerplate for creating an API server in AdonisJs which implemented Domain Driven Design Pattern. It comes pre-configured with.

1. Bodyparser
2. Authentication
3. CORS
4. Lucid ORM
5. Migrations and seeds


## How this architecture works
The major changes were made in the ``app`` folder, so the files in ``bootstrap (start)``, ``config`` and ``database`` works the same way as described in the AdonisJS docs, there were only few changes in these folders, so you don't need to worry too much about them.

This boilerplate uses a [DDD based architecture](https://domainlanguage.com/ddd/reference/), so the main folder will be working with: ``Domains`` and ``Modules`` folders.

``Domains`` and ``Modules`` directory is automatically created when you run:
* ``adonis make:module [MODULE_NAME]`` this command will generate the ``module``.
* ``adonis make:domain [DOMAIN_NAME]`` this command will generate the ``domain``.


## Project Structure

Here's project structure in AdonisJs API Skeleton.

```
   /
   ├── app/
       ├── Core/
           ├── Commands/
               ├── Generators/
                   ├── BaseCommand.js
                   └── ModuleCommand.js
               └── Templates/
           ├── Contracts/
               ├── Controller.js
               ├── Repository.js
               └── Service.js
           └── Http/
               ├── kernel.js
               └── router.js
       ├── Domains/
           └── .../
               ├── Models/
               ├── Repositories/
               └── Validators/
       ├── Middleware/
       ├── Modules/
           └── .../
               ├── Http/
                   ├── Controllers/
                   └── Routing/
               ├── Resources/
               └── Services/
       └── Providers/
           └── routes.js
   ├── bootstrap/
       ├── ace.js
       ├── app.js
       └── http.js
   ├── config/
       ├── app.js
       ├── auth.js
       ├── bodyParser.js
       ├── cors.js
       ├── database.js
       └── hash.js
   ├── database/
       ├── migrations/
       ├── seeds/
       └── factory.js
   ├── ace
   ├── package.json
   └── server.js/
```

#### # Root Directories

##### app
The ``app`` directory is the home of your application logic. 

It’s autoloaded under the namespace ``App``.


##### bootstrap
The ``bootstrap`` directory is used to store files that are loaded at the boot of your application.


##### config
The ``config`` directory is used to define the configuration of your application.

AdonisJs ships with a number of config files, but feel free to create your own.

[Read more about configuration.](https://adonisjs.com/docs/4.1/configuration-and-env)


##### database
The ``database`` directory is used to store all database related files.

[Read more about database.](https://adonisjs.com/docs/4.1/database)


#### # App Directories

##### app/Core
The ``app/Core`` are helper files that created to make things simpler when working with this boilerplate, most likely that you don't need to change nothing here.


##### app/Domains
The ``app/Domains`` are the ``domain`` of your application, each ``domain`` will have one or more:
* ``models``
* ``repositories``
* ``validators``

Here you will put only ``domains`` that can be used and shared by your ``Modules``.

##### app/Middleware
The ``app/Middleware`` directory is used to store all your middleware. This directory is automatically created when you run adonis ```make:middleware <name>```.


##### app/Modules
The ``app/Modules`` are the ``module`` of your application, think in each module as an ``microservices``, they are independent and can use one or many ``Domains``. Each module needs to define their own ``routes`` and will be have one or more:
* ``controllers``
* ``resources``
* ``services``

##### app/Providers
The ``app/Providers`` directory is used to store all file like:
* ``channels``: used to define ``Websocket channels`` that your application can use.
* ``events``: used to define ``Event`` that your application will run.
* ``routes``: used to define ``Routes`` of your application, you only need to create an array with the ``modules`` you want to be loaded in your application.

## How to Use
* Clone this repository `git clone https://gitlab.com/f.widjaya20/adonis-api-skeleton.git`
* Change origin url to your own repository with `git remote`
* Install dependencies with `npm install` or `yarn install`
* Serve project : `adonis serve`
* Have fun!


## Resources
- [AdonisJS Documentation](https://adonisjs.com/docs/4.1/installation)

## Contributing
We would love for you to contribute to this repo and help make it even better than it is today! 
Build your code and submit your Pull Request.

Thankyou!
