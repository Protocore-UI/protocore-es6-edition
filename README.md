# protocore-es6-edition [![GitHub version](http://img.shields.io/badge/version-0.0.1-brightgreen.svg)](https://github.com/hegdeashwin/protocore-es6-edition/releases)

[![Built with Grunt](http://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)  [![License version](http://img.shields.io/badge/License-MIT-red.svg)](https://github.com/hegdeashwin/protocore-es6-edition#license)


protocore-es6-edition is special **ECMAScript 6** implementation edition of [Protocore](//github.com/Protocore-UI/protocore) project.

## Prerequisites

As protocore-es6-edition is based on JavaScript. It is assumed user already knows JavaScript and jQuery.

For understanding protocore-es6-edition, knowledge of following JavaScript libraries/frameworks are must.
* Require.js - a JavaScript file and module loader. For more information visit [requirejs.org](//requirejs.org/)
* ECMAScript 6 - Understanding and features.

## Installation

Assuming that Git is already installed & running:
```
git clone https://github.com/Protocore-UI/protocore-es6-edition
```

Assuming that Node.js & Bower is already installed & running,

Install dependencies:
```
npm install
```

Assuming that Bower is already installed & running,

Install client-side dependencies:
```
bower install
```

Generate CSS files from LESS: (First command after installing dependencies)
```
grunt compileLessDev
```

To start the development server:
```
node --harmony server.js
```
or
```
NODE_ENV=development node --harmony server.js
```
or
```
npm start
```

To start the production server:
```
NODE_ENV=production node --harmony server.js
```

## Server layer

The server side codebase resides in the ```server.js``` and ```config.js``` files. By default, the server layer is written in JavaScript (Node.js with Express 4.x) which can be configured and flexible to work with any server side scripting language like Java, PHP, ASP.NET or others. As client and server layer are seperate entity.

## Client layer

The client side codebase resides in the ```src``` folder. This folder contains following subfolders.

```
/src
	+-- /stylesheets
		+--/css
		+--/less
			+--/common
			+--/base
			+--/layout
			+--/modules
			+--/state
			+--/theme
	+-- /assets
		+--/fonts
		+--/images
	+-- /apps
		+--/controller
		+--/models
		+--/views
		+--/router
		+--/templates
	+-- /bower_components [Created by ```bower install``` command]
```

## Test layer

The test side codebase resides in the ```tests``` folder. This folder contains following subfolders.

```
/tests
	+-- /configs
	+-- /apps
		+--/controller
		+--/models
		+--/views
		+--/router
```


## Stylesheet layer

The codebase comes with LESS setup with a ```Scalable and Modular Architecture for CSS (SMACSS)``` approach.  SMACSS is a way to examine your design process and as a way to fit those rigid frameworks into a flexible thought process. It is an attempt to document a consistent approach to site development when using CSS.

## Task automation

protocore-es6-edition comes with Grunt ecosystem - a JavaScript task runner to perform repetitive tasks like minification, compilation, unit testing, linting etc. Many of the tasks you need are already available as published Grunt plugins.

Few task automations has been configured to detect errors and potential problems in codebase and to enforce your team's coding conventions.

Following are the default Grunt plugins that has been integrated with protocore-es6-edition codebase.

**Automations tasks & commands**

| Linting commands |
|:---|
|Markdown : ```grunt mdlint``` |
|HTML/Templates : ```grunt htmlhint```|
|JavaScript : ```grunt jshint``` AND ```grunt jscs```|
|JSON : ```grunt jsonlint```|
|CSS : ```grunt csslint```|

| Build commands |
|:---|
|Production : ```grunt build```|

| Compilation commands |
|:---|
|LESS for development : ```grunt compileLessDev```|
|LESS for production : ```grunt compileLessProd```|

| Watch commands |
|:---|
|LESS Compilation for development : ```grunt watchless```|

| Unit test commands |
|:---|
|Browser: ```http://localhost:8080/tests/``` install http-server npm|

|Report generator commands|
|:---|
|Plato : ```grunt analysis``` OR ```grunt plato```|

## Author & Contributors

Developed &amp; maintained by author: Ashwin Hegde and contributions.

We really appreciate all kind of contributions. Special thanks to [Contributors](//github.com/hegdeashwin/protocore-es6-edition/graphs/contributors) for using and supporting protocore-es6-edition.

To request a feature or you find any typo errors, enhancements or questions; please feel free to post it on following link, or vote for the ones that are already registered.
[https://github.com/hegdeashwin/protocore-es6-edition/issues](https://github.com/hegdeashwin/protocore-es6-edition/issues)

## License

The MIT License (MIT)

Copyright (c) 2016 Ashwin Hegde
