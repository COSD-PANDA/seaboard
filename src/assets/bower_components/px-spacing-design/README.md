# Spacing

The Predix UI Spacing module is a collection of helper classes for spacings like margin and padding. This module is a fork of inuitcss' [spacing](https://github.com/inuitcss/trumps.spacing) module.

## Dependency

Predix UI's Spacing module depends on one other PX module:

* [px-defaults-design](https://github.com/PredixDev/px-defaults-design)

## Installation

Install this module and its dependencies using bower:

    bower install --save px-spacing-design

Once installed, `@import` into your project's Sass file in its **Trumps** layer:

    @import "px-spacing-design/_trumps.spacing.scss";

## Usage

These flags are available and, if needed, should be set to `true` prior to importing the module:

    $inuit-enable-margins
    $inuit-enable-margins--tiny
    $inuit-enable-margins--small
    $inuit-enable-margins--large
    $inuit-enable-margins--huge

    $inuit-enable-margins--negative
    $inuit-enable-margins--negative-tiny
    $inuit-enable-margins--negative-small
    $inuit-enable-margins--negative-large
    $inuit-enable-margins--negative-huge

    $inuit-enable-margins--none

    $inuit-enable-margins--rtl

    $inuit-enable-paddings
    $inuit-enable-paddings--tiny
    $inuit-enable-paddings--small
    $inuit-enable-paddings--large
    $inuit-enable-paddings--huge

    $inuit-enable-paddings--none

    $inuit-enable-paddings--rtl

The conventions used in the classes in the spacing module are as follows:

    .u-[negative][type][direction][size] {}

E.g.:

* `.u--mt+` will give you a large (`+`) negative (`-`) margin (`m`) top (`t`).
* `.u-p--` will give you a tiny (`--`) padding (`p`).
* `.u-mh++` will give you a huge (`++`) horizontal (`h`) margin (`m`).
* `.u-mb0` will give you no (`0`) margin (`m`) bottom (`b`).
* `.u-pl-` will give you a small (`-`) padding (`p`) left (`l`).

Knowing these conventions means you can compose a huge array of spacing helpers.

## Options

These classes are available if the following variable flags are set to `true`:

`$inuit-enable-margins`:

* `u-m`: add default margins to all sides
* `u-mt`: add default margin top
* `u-mr`: add default margin right
* `u-mb`: add default margin bottom
* `u-ml`: add default margin left
* `u-mh`: add default margins right and left
* `u-mv`: add default margins top and bottom

`$inuit-enable-margins--tiny`:

* `u-m--`: add tiny margins to all sides
* `u-mt--`: add tiny margin top
* `u-mr--`: add tiny margin right
* `u-mb--`: add tiny margin bottom
* `u-ml--`: add tiny margin left
* `u-mh--`: add tiny margins right and left
* `u-mv--`: add tiny margins top and bottom

`$inuit-enable-margins--small`:

* `u-m-`: add small margins to all sides
* `u-mt-`: add small margin top
* `u-mr-`: add small margin right
* `u-mb-`: add small margin bottom
* `u-ml-`: add small margin left
* `u-mh-`: add small margins right and left
* `u-mv-`: add small margins top and bottom

`$inuit-enable-margins--large`:

* `u-m+`: add large margins to all sides
* `u-mt+`: add large margin top
* `u-mr+`: add large margin right
* `u-mb+`: add large margin bottom
* `u-ml+`: add large margin left
* `u-mh+`: add large margins right and left
* `u-mv+`: add large margins top and bottom

`$inuit-enable-margins--huge`:

* `u-m++`: add huge margins to all sides
* `u-mt++`: add huge margin top
* `u-mr++`: add huge margin right
* `u-mb++`: add huge margin bottom
* `u-ml++`: add huge margin left
* `u-mh++`: add huge margins right and left
* `u-mv++`: add huge margins top and bottom

`$inuit-enable-margins--negative`:

* `u--m`: add default negative margins to all sides
* `u--mt`: add default negative margin top
* `u--mr`: add default negative margin right
* `u--mb`: add default negative margin bottom
* `u--ml`: add default negative margin left
* `u--mh`: add default negative margins right and left
* `u--mv`: add default negative margins top and bottom

`$inuit-enable-margins--negative-tiny`:

* `u--m--`: add tiny negative margins to all sides
* `u--mt--`: add tiny negative margin top
* `u--mr--`: add tiny negative margin right
* `u--mb--`: add tiny negative margin bottom
* `u--ml--`: add tiny negative margin left
* `u--mh--`: add tiny negative margins right and left
* `u--mv--`: add tiny negative margins top and bottom

`$inuit-enable-margins--negative-small`:

* `u--m-`: add small negative margins to all sides
* `u--mt-`: add small negative margin top
* `u--mr-`: add small negative margin right
* `u--mb-`: add small negative margin bottom
* `u--ml-`: add small negative margin left
* `u--mh-`: add small negative margins right and left
* `u--mv-`: add small negative margins top and bottom

`$inuit-enable-margins--negative-large`:

* `u--m+`: add large negative margins to all sides
* `u--mt+`: add large negative margin top
* `u--mr+`: add large negative margin right
* `u--mb+`: add large negative margin bottom
* `u--ml+`: add large negative margin left
* `u--mh+`: add large negative margins right and left
* `u--mv+`: add large negative margins top and bottom

`$inuit-enable-margins--negative-huge`:

* `u--m++`: add huge negative margins to all sides
* `u--mt++`: add huge negative margin top
* `u--mr++`: add huge negative margin right
* `u--mb++`: add huge negative margin bottom
* `u--ml++`: add huge negative margin left
* `u--mh++`: add huge negative margins right and left
* `u--mv++`: add huge negative margins top and bottom

`$inuit-enable-margins--none`:

* `u-m0`: remove margins
* `u-mt0`: remove margin top
* `u-mr0`: remove margin right
* `u-mb0`: remove margin bottom
* `u-ml0`: remove margin left
* `u-mh0`: remove margins right and left
* `u-mv0`: remove margins top and bottom

`$inuit-enable-paddings`:

* `u-p`: add default padding to all sides
* `u-pt`: add default padding top
* `u-pr`: add default padding right
* `u-pb`: add default padding bottom
* `u-pl`: add default padding left
* `u-ph`: add default padding right and left
* `u-pv`: add default padding top and bottom

`$inuit-enable-paddings--tiny`:

* `u-p--`: add tiny padding to all sides
* `u-pt--`: add tiny padding top
* `u-pr--`: add tiny padding right
* `u-pb--`: add tiny padding bottom
* `u-pl--`: add tiny padding left
* `u-ph--`: add tiny padding right and left
* `u-pv--`: add tiny padding top and bottom

`$inuit-enable-paddings--small`:

* `u-p-`: add small padding to all sides
* `u-pt-`: add small padding top
* `u-pr-`: add small padding right
* `u-pb-`: add small padding bottom
* `u-pl-`: add small padding left
* `u-ph-`: add small padding right and left
* `u-pv-`: add small padding top and bottom

`$inuit-enable-paddings--large`:

* `u-p+`: add large padding to all sides
* `u-pt+`: add large padding top
* `u-pr+`: add large padding right
* `u-pb+`: add large padding bottom
* `u-pl+`: add large padding left
* `u-ph+`: add large padding right and left
* `u-pv+`: add large padding top and bottom

`$inuit-enable-paddings--huge`:

* `u-p++`: add huge padding to all sides
* `u-pt++`: add huge padding top
* `u-pr++`: add huge padding right
* `u-pb++`: add huge padding bottom
* `u-pl++`: add huge padding left
* `u-ph++`: add huge padding right and left
* `u-pv++`: add huge padding top and bottom

`$inuit-enable-paddings--none`:

* `u-p0`: remove padding
* `u-pt0`: remove padding top
* `u-pr0`: remove padding right
* `u-pb0`: remove padding bottom
* `u-pl0`: remove padding left
* `u-ph0`: remove padding right and left
* `u-pv0`: remove padding top and bottom

view the full API [here](http://predixdev.github.io/px-spacing-design/sassdoc/)
