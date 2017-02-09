# px-defaults-design

The defaults module contains variables and settings that are required for using nearly all Predix UI CSS modules. Use it to set the default font color, size, and vertical rhythm for your project.

**px-defaults-design is a Predix UI CSS module.** You can find a demonstration and full documentation on the [Predix UI catalog](https://predixdev.github.io/predix-ui/?show=px-defaults-design&type=css).

## Install the module

To use the module, you need to install it in your project using Bower. Run this task on the command line from inside your project folder:

```
bower install --save px-defaults-design
```

## Import it in your Sass

The module won't do anything until you import and configure it in your project Sass file. Follow these steps to import it:

### 1. Enable Flags

There are no flags to set before importing this module in your project Sass file.

### 2. Customize Styles

You can change style variables to customize the design of the defaults module. To change styles, set any the variables below to a new value above the module's `@import` statement in your project Sass file:

```
$inuit-base-font-size
$inuit-base-line-height
$inuit-base-text-color
$inuit-base-background-color
$inuit-namespace
```

### 3. Import Sass File

Import the module by placing this code into the `Settings` layer of your project Sass file:

```
@import 'px-defaults-design/_settings.defaults.scss';
```

## Use it in your project

This module defines default style variables that many modules in your project will rely on. Take a look at the [Customize Styles section on the module's documentation page](https://predixdev.github.io/predix-ui/?show=px-defaults-design&type=css]) for a full list of available variables and instructions on how to use them.

The defaults provided are a good starting point for most projects. To change any of the variables, override them in your project Sass file by adding the new definitions above your `@import` line.

## Dependencies

This module depends on the following Predix UI CSS modules:

* [px-functions-design](https://github.com/PredixDev/px-functions-design)
