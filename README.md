# the-tech-blog
## Description
Writing about tech can be just as important as making it. Developers spend plenty of time creating new applications and debugging existing codebases, but most developers also spend at least some of their time reading and writing about technical concepts, recent advancements, and new technologies. A simple Google search for any concept covered in this course returns thousands of think pieces and tutorials from developers of all skill levels!

Your challenge this week is to build a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well. You’ll build this site completely from scratch and deploy it to Heroku. Your app will follow the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.


## Table of Contents
*[Installation](#installation)
*[Usage](#usage)
*[credits](#credits)
*[License](#license)
*[Contacts](#contacts)

## Installation
Your application’s folder structure must follow the Model-View-Controller paradigm. You’ll need to use the [express-handlebars](https://www.npmjs.com/package/express-handlebars) package to use Handlebars.js for your Views, use the [MySQL2](https://www.npmjs.com/package/mysql2) and [Sequelize](https://www.npmjs.com/package/sequelize) packages to connect to a MySQL database for your Models, and create an Express.js API for your Controllers.

You’ll also need the [dotenv package](https://www.npmjs.com/package/dotenv) to use environment variables, the [bcrypt package](https://www.npmjs.com/package/bcrypt) to hash passwords, and the [express-session](https://www.npmjs.com/package/express-session) and [connect-session-sequelize](https://www.npmjs.com/package/connect-session-sequelize) packages to add authentication.
To run the program you will need to install all of these.

## Usage
The application is deployed on Heroku at https://frozen-hollows-88268.herokuapp.com/. You can find the code on gitHub at https://github.com/sandy-06/the-tech-blog.

![alt text](/public/images/165842.png)

## Credits
The application was built by Sandra Sanders.

## License
Adobe 2

## Contacts
Sandra Sanders
https://github.com/sandy-06
sandy-sanders@msn.com
for any questions.