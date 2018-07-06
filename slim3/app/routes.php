<?php
// Routes

//$app->get('/', App\Action\HomeAction::class)
//    ->setName('homepage');

//Cors
$app->options('/{routes:.+}', function ($request, $response, $args) {
    return $response;
});

//cross site scripting 
$app->add(function ($req, $res, $next) {
    $response = $next($req, $res);
    return $response
            ->withHeader('Access-Control-Allow-Origin', '*')
            ->withHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept, Origin, Authorization')
            ->withHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
});

//routes for api for todo operations
$app->get('/api/todos', 'App\Action\TodoAction:fetch');
$app->get('/api/todos/{id}', 'App\Action\TodoAction:fetchOne');
$app->post('/api/todos', 'App\Action\TodoAction:create');
$app->delete('/api/todos/{id}', 'App\Action\TodoAction:delete');
$app->put('/api/todos/{id}', 'App\Action\TodoAction:update');
