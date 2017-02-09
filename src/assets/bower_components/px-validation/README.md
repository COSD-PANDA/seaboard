#Px-validation [![Build Status](https://travis-ci.org/PredixDev/px-validation.svg?branch=master)](https://travis-ci.org/PredixDev/px-validation)

[px-validation demo](https://predixdev.github.io/px-validation)

## Overview

Px-validation is a Predix UI component

## Usage

### Prerequisites
1. node.js
2. npm
3. bower
4. [webcomponents-lite.js polyfill](https://github.com/webcomponents/webcomponentsjs)

Node, npm and bower are necessary to install the component and dependencies. webcomponents.js adds support for web components and custom elements to your application.

### Getting Started

First, install the component via bower on the command line.

```
bower install px-validation --save
```

Second, import the component to your application with the following tag in your head.

```
<link rel="import" href="/bower_components/px-validation/px-validation.html"/>
```

Finally, use the component in your application:

```
<px-validation>
  <px-validator validation-method="isNumber" import="px-example-validator.html"></px-validator>
  <px-validator multi-step-validation='["isNumber", "isRed", "isBlue"]' import="px-example-validator.html"></px-validator>
</px-validation>
```


## documentation

Read the full API and view the demo [here](https://predixdev.github.io/px-validation).

## Local Development

From the component's directory...

```
$ npm install
$ bower install
$ gulp sass
```

From the component's directory, to start a local server run:

```
$ gulp serve
```

Navigate to the root of that server (e.g. http://localhost:8080/) in a browser to open the API documentation page, with link to the "Demo" / working examples.



### GE Coding Style Guide
[GE JS Developer's Guide](https://github.com/GeneralElectric/javascript)

<br />
<hr />

## Known Issues

Please use [Github Issues](https://github.com/PredixDev/px-validation/issues) to submit any bugs you might find.
