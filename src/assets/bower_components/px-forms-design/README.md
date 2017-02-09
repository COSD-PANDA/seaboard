# Forms

The Predix UI Forms module defines styles for form elements such as `<input>`, `<label>`, `<select>` and so on. It is based on Formalize (http://formalize.me) by Nathan Smith (http://sonspring.com/)

## Dependencies

Predix UI's Forms module depends on two other Px modules:

* [px-colors-design](https://github.com/PredixDev/px-colors-design)
* [px-defaults-design](https://github.com/PredixDev/px-defaults-design)

## Installation

Install this module and its dependencies using bower:

    bower install --save px-forms-design

Once installed, `@import` into your project's Sass file in its Base layer:

    @import "px-forms-design/_base.forms.scss";

## Usage

This flag is available and, if needed, should be set to `true` prior to importing the module:

    $inuit-enable-inline-fields
    $inuit-enable-text-input--bare
    $inuit-enable-validation-states
    $inuit-enable-input--tiny
    $inuit-enable-input--small
    $inuit-enable-input--regular
    $inuit-enable-input--large
    $inuit-enable-input--huge

The following variables are available for use in the module:

    $inuit-forms-color
    $inuit-forms-color--placeholder
    $inuit-forms-background
    $inuit-forms-border--inner
    $inuit-forms-border--outer
    $inuit-forms-border--inner--focused
    $inuit-forms-border--outer--focused
    $inuit-forms-color--disabled
    $inuit-forms-background--disabled
    $inuit-forms-border--disabled
    $inuit-forms-color--readonly
    $inuit-forms-background--readonly
    $inuit-forms-border--readonly
    $inuit-forms-color--help
    $inuit-forms-select-background
    $inuit-forms-select-color
    $inuit-forms-select-shadow--dark
    $inuit-forms-select-shadow--light
    $inuit-forms-select-color--disabled
    $inuit-forms-select-background--disabled
    $inuit-forms-select-background--hover
    $inuit-forms-select-border--hover
    $inuit-forms-select-background--pressed
    $inuit-forms-select-border--pressed
    $inuit-forms-select-multiple-background
    $inuit-forms-validation-warning
    $inuit-forms-validation-error
    $inuit-forms-validation-success

Basic usage of forms.base requires `<input>` fields with the following `type` attributes to carry the `text-input` class:

    [type=email]
    [type=number]
    [type=password]
    [type=search]
    [type=tel]
    [type=text]
    [type=url]

## Options

* `.text-input--bare`: display form fields without margin, padding, or borders.
* `.form-field--inline`: display form fields alongside each other, not stacked.
* `.input--[tiny|small|regular|large|huge]`: define fixed widths for form fields.

view the full API [here](http://predixdev.github.io/px-forms-design/)
