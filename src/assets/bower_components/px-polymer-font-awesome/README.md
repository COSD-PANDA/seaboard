# px-polymer-font-awesome [![Build Status](https://travis-ci.org/PredixDev/px-polymer-font-awesome.svg?branch=master)](https://travis-ci.org/PredixDev/px-polymer-font-awesome)

[![px-polymer-font-awesome demo](px-polymer-font-awesome.png?raw=true)](https://PredixDev.github.io/px-polymer-font-awesome/)

## Overview

px-polymer-font-awesome the font awesome icons, made available - in a shadow dom compliant way - through a polymer tag.

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
bower install px-polymer-font-awesome --save
```

Second, import the component to your application with the following tag in your head.

```
<link rel="import" href="/bower_components/px-polymer-font-awesome/px-polymer-font-awesome.html"/>
```

Finally, use the component in your application:

```
<iron-icon icon="fa:fa-angle-down"></iron-icon>
```

<br />
<hr />

## documentation

Read the full API and view the demo [here](https://predixdev.github.io/px-polymer-font-awesome).

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

Please use [Github Issues](https://github.com/PredixDev/px-polymer-font-awesome/issues) to submit any bugs you might find.
