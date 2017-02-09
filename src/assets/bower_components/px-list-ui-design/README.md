# List UI

The Predix UI List UI module creates blocky, keyline-delimited list items. This module is a fork of the [inuitcss list-ui module](https://github.com/inuitcss/objects.list-ui).

## Dependencies

Predix UI's List UI module depends on two other PX modules:

* [px-colors-design](https://github.com/PredixDev/px-colors-design)
* [px-defaults-design](https://github.com/PredixDev/px-defaults-design)

## Upstream dependency

The List UI module is also an upstream dependency in this meta kit:

* [px-meta-lists-design](https://github.com/PredixDev/px-meta-lists-design)

## Installation

Install this module and its dependencies using bower:

    bower install --save px-list-ui-design

Once installed, `@import` into your project's Sass file in its Objects layer:

    @import "px-list-ui-design/_objects.list-ui.scss";

## Usage

These flags are available and, if needed, should be set to `true` prior to importing the module:

    $inuit-enable-list-ui--tiny
    $inuit-enable-list-ui--small
    $inuit-enable-list-ui--large
    $inuit-enable-list-ui--huge

The following variables are available for use in the module:

    $inuit-list-ui-border-width
    $inuit-list-ui-border-style
    $inuit-list-ui-border-color

Basic usage of the List UI module uses the required classes:

    <ul class="list-ui">
        <li class="list-ui__item">
            Foo
        </li>
        <li class="list-ui__item">
            Bar
        </li>
        <li class="list-ui__item">
            Baz
        </li>
    </li>

The only valid children of the `.list-ui` node are `.list-ui__item`s.

## Options

These classes are available if the variable flags listed above are set to `true`:

* `list-ui--[tiny|small|large|huge]`: Different sizes for list-uis.

The above classes adjust the padding on all sides of each `list-ui__item`.

view the full API [here](https://predixdev.github.io/px-list-ui-design/)
