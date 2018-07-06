<?php
return [
	'settings' => [
		// Slim Settings
		'determineRouteBeforeAppMiddleware' => false,
		'displayErrorDetails' => false,

		// View settings
		'view' => [
			'template_path' => __DIR__ . '/templates',
			'twig' => [
				'cache' => __DIR__ . '/../cache/twig',
				'debug' => true,
				'auto_reload' => true,
			],
		],

		// monolog settings
		'logger' => [
			'name' => 'app',
			'path' => __DIR__ . '/../log/app.log',
		],

		//provide doctorine configuration
		'doctrine' => [
			'meta' => [
				'entity_path' => [
					'app/src/Entity',
				],
				'auto_generate_proxies' => true,
				'proxy_dir' => __DIR__ . '/../cache/proxies',
				'cache' => null,
			],
			'connection' => [
				'driver' => 'pdo_mysql',
				'host' => 'localhost',
				'dbname' => 'db_todo',
				'user' => 'root',
				'password' => '',
			],
		],
	],
];
