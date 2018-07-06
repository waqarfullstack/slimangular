# slimangular
Here are the instructions to run the package successfully on your local dev machine:
1- upload the package to your localhost root, eg: localhost/todo
2- fix the path in localhost/todo/slim3/public/.htaccess (consider the package exists at localhost/todo)
3- fix the path in the angular package at localhost/todo/src/app/todos/todo.service.ts which is around the 20th line
4- run the node command as, npm install at the root of your package
5- inside the slim3 folder run composer install
6- fix the db sttings in localhost/todo/slim3/app/settings.php file
7- run the doctrine query on console as: vendor/bin/doctrine orm:schema-tool:create to create the database schema
8- run the ng serve --open on node terminal and you are done!
