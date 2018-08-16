( function() {

if ( !jQuery.fn.width ) {
	return;
}

QUnit.module( "dimensions", { teardown: moduleTeardown } );

function pass( val ) {
	return val;
}

function fn( val ) {
	return function() {
		return val;
	};
}

/*
	======== local reference =======
	pass and fn can be used to test passing functions to setters
	See testWidth below for an example

	pass( value, assert );
		This function returns whatever value is passed in

	fn( value, assert );
		Returns a function that returns the value
*/

function testWidth( val, assert ) {
	assert.expect( 9 );
	var $div, blah;

	$div = jQuery( "#nothiddendiv" );
	$div.width( val( 30 ) );
	assert.equal( $div.width(), 30, "Test set to 30 correctly" );
	$div.hide();
	assert.equal( $div.width(), 30, "Test hidden div" );
	$div.show();
	$div.width( val( -1 ) ); // handle negative numbers by setting to 0 #11604
	assert.equal( $div.width(), 0, "Test negative width normalized to 0" );
	$div.css( "padding", "20px" );
	assert.equal( $div.width(), 0, "Test padding specified with pixels" );
	$div.css( "border", "2px solid #fff" );
	assert.equal( $div.width(), 0, "Test border specified with pixels" );

	$div.css( { "display": "", "border": "", "padding": "" } );

	jQuery( "#nothiddendivchild" ).css( { "width": 20, "padding": "3px", "border": "2px solid #fff" } );
	assert.equal( jQuery( "#nothiddendivchild" ).width(), 20, "Test child width with border and padding" );
	jQuery( "#nothiddendiv, #nothiddendivchild" ).css( { "border": "", "padding": "", "width": "" } );

	blah = jQuery( "blah" );
	assert.equal( blah.width( val( 10 ) ), blah, "Make sure that setting a width on an empty set returns the set." );
	assert.equal( blah.width(), null, "Make sure 'null' is returned on an empty set" );

	assert.equal( jQuery( window ).width(), document.documentElement.clientWidth, "Window width is equal to width reported by window/document." );
}

QUnit.test( "width()", function( assert ) {
	testWidth( pass, assert );
} );

QUnit.test( "width(Function)", function( assert ) {
	testWidth( fn, assert );
} );

QUnit.test( "width(Function(args))", function( assert ) {
	assert.expect( 2 );

	var $div = jQuery( "#nothiddendiv" );
	$div.width( 30 ).width( function( i, width ) {
		assert.equal( width, 30, "Make sure previous value is correct." );
		return width + 1;
	} );

	assert.equal( $div.width(), 31, "Make sure value was modified correctly." );
} );

function testHeight( val, assert ) {
	assert.expect( 9 );

	var $div, blah;

	$div = jQuery( "#nothiddendiv" );
	$div.height( val( 30 ) );
	assert.equal( $div.height(), 30, "Test set to 30 correctly" );
	$div.hide();
	assert.equal( $div.height(), 30, "Test hidden div" );
	$div.show();
	$div.height( val( -1 ) ); // handle negative numbers by setting to 0 #11604
	assert.equal( $div.height(), 0, "Test negative height normalized to 0" );
	$div.css( "padding", "20px" );
	assert.equal( $div.height(), 0, "Test padding specified with pixels" );
	$div.css( "border", "2px solid #fff" );
	assert.equal( $div.height(), 0, "Test border specified with pixels" );

	$div.css( { "display": "", "border": "", "padding": "", "height": "1px" } );

	jQuery( "#nothiddendivchild" ).css( { "height": 20, "padding": "3px", "border": "2px solid #fff" } );
	assert.equal( jQuery( "#nothiddendivchild" ).height(), 20, "Test child height with border and padding" );
	jQuery( "#nothiddendiv, #nothiddendivchild" ).css( { "border": "", "padding": "", "height": "" } );

	blah = jQuery( "blah" );
	assert.equal( blah.height( val( 10 ) ), blah, "Make sure that setting a height on an empty set returns the set." );
	assert.equal( blah.height(), null, "Make sure 'null' is returned on an empty set" );

	assert.equal( jQuery( window ).height(), document.documentElement.clientHeight, "Window width is equal to width reported by window/document." );
}

QUnit.test( "height()", function( assert ) {
	testHeight( pass, assert );
} );

QUnit.test( "height(Function)", function( assert ) {
	testHeight( fn, assert );
} );

QUnit.test( "height(Function(args))", function( assert ) {
	assert.expect( 2 );

	var $div = jQuery( "#nothiddendiv" );
	$div.height( 30 ).height( function( i, height ) {
		assert.equal( height, 30, "Make sure previous value is correct." );
		return height + 1;
	} );

	assert.equal( $div.height(), 31, "Make sure value was modified correctly." );
} );

QUnit.test( "innerWidth()", function( assert ) {
	assert.expect( 6 );

	var $div, div,
		$win = jQuery( window ),
		$doc = jQuery( document );

	assert.equal( jQuery( window ).innerWidth(), $win.width(), "Test on window" );
	assert.equal( jQuery( document ).innerWidth(), $doc.width(), "Test on document" );

	$div = jQuery( "#nothiddendiv" );
	$div.css( {
		"margin": 10,
		"border": "2px solid #fff",
		"width": 30
	} );

	assert.equal( $div.innerWidth(), 30, "Test with margin and border" );
	$div.css( "padding", "20px" );
	assert.equal( $div.innerWidth(), 70, "Test with margin, border and padding" );
	$div.hide();
	assert.equal( $div.innerWidth(), 70, "Test hidden div" );

	// reset styles
	$div.css( { "display": "", "border": "", "padding": "", "width": "", "height": "" } );

	div = jQuery( "<div>" );

	// Temporarily require 0 for backwards compat - should be auto
	assert.equal( div.innerWidth(), 0, "Make sure that disconnected nodes are handled." );

	div.remove();
} );

QUnit.test( "innerHeight()", function( assert ) {
	assert.expect( 6 );

	var $div, div,
		$win = jQuery( window ),
		$doc = jQuery( document );

	assert.equal( jQuery( window ).innerHeight(), $win.height(), "Test on window" );
	assert.equal( jQuery( document ).innerHeight(), $doc.height(), "Test on document" );

	$div = jQuery( "#nothiddendiv" );
	$div.css( {
		"margin": 10,
		"border": "2px solid #fff",
		"height": 30
	} );

	assert.equal( $div.innerHeight(), 30, "Test with margin and border" );
	$div.css( "padding", "20px" );
	assert.equal( $div.innerHeight(), 70, "Test with margin, border and padding" );
	$div.hide();
	assert.equal( $div.innerHeight(), 70, "Test hidden div" );

	// reset styles
	$div.css( { "display": "", "border": "", "padding": "", "width": "", "height": "" } );

	div = jQuery( "<div>" );

	// Temporarily require 0 for backwards compat - should be auto
	assert.equal( div.innerHeight(), 0, "Make sure that disconnected nodes are handled." );

	div.remove();
} );

QUnit.test( "outerWidth()", function( assert ) {
	assert.expect( 11 );

	var $div, div,
		$win = jQuery( window ),
		$doc = jQuery( document );

	assert.equal( jQuery( window ).outerWidth(), $win.width(), "Test on window without margin option" );
	assert.equal( jQuery( window ).outerWidth( true ), $win.width(), "Test on window with margin option" );
	assert.equal( jQuery( document ).outerWidth(), $doc.width(), "Test on document without margin option" );
	assert.equal( jQuery( document ).outerWidth( true ), $doc.width(), "Test on document with margin option" );

	$div = jQuery( "#nothiddendiv" );
	$div.css( "width", 30 );

	assert.equal( $div.outerWidth(), 30, "Test with only width set" );
	$div.css( "padding", "20px" );
	assert.equal( $div.outerWidth(), 70, "Test with padding" );
	$div.css( "border", "2px solid #fff" );
	assert.equal( $div.outerWidth(), 74, "Test with padding and border" );
	$div.css( "margin", "10px" );
	assert.equal( $div.outerWidth(), 74, "Test with padding, border and margin without margin option" );
	$div.css( "position", "absolute" );
	assert.equal( $div.outerWidth( true ), 94, "Test with padding, border and margin with margin option" );
	$div.hide();
	assert.equal( $div.outerWidth( true ), 94, "Test hidden div with padding, border and margin with margin option" );

	// reset styles
	$div.css( { "position": "", "display": "", "border": "", "padding": "", "width": "", "height": "" } );

	div = jQuery( "<div>" );

	// Temporarily require 0 for backwards compat - should be auto
	assert.equal( div.outerWidth(), 0, "Make sure that disconnected nodes are handled." );

	div.remove();
} );

QUnit.test( "child of a hidden elem (or unconnected node) has accurate inner/outer/Width()/Height()  see #9441 #9300", function( assert ) {
	assert.expect( 16 );

	// setup html
	var $divNormal = jQuery( "<div>" ).css( { "width": "100px", "height": "100px", "border": "10px solid white", "padding": "2px", "margin": "3px" } ),
		$divChild = $divNormal.clone(),
		$divUnconnected = $divNormal.clone(),
		$divHiddenParent = jQuery( "<div>" ).css( "display", "none" ).append( $divChild ).appendTo( "body" );
	$divNormal.appendTo( "body" );

	// tests that child div of a hidden div works the same as a normal div
	assert.equal( $divChild.width(), $divNormal.width(), "child of a hidden element width() is wrong see #9441" );
	assert.equal( $divChild.innerWidth(), $divNormal.innerWidth(), "child of a hidden element innerWidth() is wrong see #9441" );
	assert.equal( $divChild.outerWidth(), $divNormal.outerWidth(), "child of a hidden element outerWidth() is wrong see #9441" );
	assert.equal( $divChild.outerWidth( true ), $divNormal.outerWidth( true ), "child of a hidden element outerWidth( true ) is wrong see #9300" );

	assert.equal( $divChild.height(), $divNormal.height(), "child of a hidden element height() is wrong see #9441" );
	assert.equal( $divChild.innerHeight(), $divNormal.innerHeight(), "child of a hidden element innerHeight() is wrong see #9441" );
	assert.equal( $divChild.outerHeight(), $divNormal.outerHeight(), "child of a hidden element outerHeight() is wrong see #9441" );
	assert.equal( $divChild.outerHeight( true ), $divNormal.outerHeight( true ), "child of a hidden element outerHeight( true ) is wrong see #9300" );

	// tests that child div of an unconnected div works the same as a normal div
	assert.equal( $divUnconnected.width(), $divNormal.width(), "unconnected element width() is wrong see #9441" );
	assert.equal( $divUnconnected.innerWidth(), $divNormal.innerWidth(), "unconnected element innerWidth() is wrong see #9441" );
	assert.equal( $divUnconnected.outerWidth(), $divNormal.outerWidth(), "unconnected element outerWidth() is wrong see #9441" );
	assert.equal( $divUnconnected.outerWidth( true ), $divNormal.outerWidth( true ), "unconnected element outerWidth( true ) is wrong see #9300" );

	assert.equal( $divUnconnected.height(), $divNormal.height(), "unconnected element height() is wrong see #9441" );
	assert.equal( $divUnconnected.innerHeight(), $divNormal.innerHeight(), "unconnected element innerHeight() is wrong see #9441" );
	assert.equal( $divUnconnected.outerHeight(), $divNormal.outerHeight(), "unconnected element outerHeight() is wrong see #9441" );
	assert.equal( $divUnconnected.outerHeight( true ), $divNormal.outerHeight( true ), "unconnected element outerHeight( true ) is wrong see #9300" );

	// teardown html
	$divHiddenParent.remove();
	$divNormal.remove();
} );

QUnit.test( "getting dimensions shouldn't modify runtimeStyle see #9233", function( assert ) {
	assert.expect( 1 );

	var $div = jQuery( "<div>" ).appendTo( "#qunit-fixture" ),
		div = $div.get( 0 ),
		runtimeStyle = div.runtimeStyle;

	if ( runtimeStyle ) {
		div.runtimeStyle.marginLeft = "12em";
		div.runtimeStyle.left = "11em";
	}

	$div.outerWidth( true );

	if ( runtimeStyle ) {
		assert.equal( div.runtimeStyle.left, "11em", "getting dimensions modifies runtimeStyle, see #9233" );
	} else {
		assert.ok( true, "this browser doesn't support runtimeStyle, see #9233" );
	}

	$div.remove();
} );

QUnit.test( "table dimensions", function( assert ) {
	assert.expect( 2 );

	var table = jQuery( "<table><colgroup><col/><col/></colgroup><tbody><tr><td></td><td>a</td></tr><tr><td></td><td>a</td></tr></tbody></table>" ).appendTo( "#qunit-fixture" ),
		tdElem = table.find( "td" ).first(),
		colElem = table.find( "col" ).first().width( 300 );

	table.find( "td" ).css( { "margin": 0, "padding": 0 } );

	assert.equal( tdElem.width(), tdElem.width(), "width() doesn't alter dimension values of empty cells, see #11293" );
	assert.equal( colElem.width(), 300, "col elements have width(), see #12243" );
} );

QUnit.test( "box-sizing:border-box child of a hidden elem (or unconnected node) has accurate inner/outer/Width()/Height()  see #10413", function( assert ) {
	assert.expect( 16 );

	// setup html
	var $divNormal = jQuery( "<div>" ).css( { "boxSizing": "border-box", "width": "100px", "height": "100px", "border": "10px solid white", "padding": "2px", "margin": "3px" } ),
		$divChild = $divNormal.clone(),
		$divUnconnected = $divNormal.clone(),
		$divHiddenParent = jQuery( "<div>" ).css( "display", "none" ).append( $divChild ).appendTo( "body" );
	$divNormal.appendTo( "body" );

	// tests that child div of a hidden div works the same as a normal div
	assert.equal( $divChild.width(), $divNormal.width(), "child of a hidden element width() is wrong see #10413" );
	assert.equal( $divChild.innerWidth(), $divNormal.innerWidth(), "child of a hidden element innerWidth() is wrong see #10413" );
	assert.equal( $divChild.outerWidth(), $divNormal.outerWidth(), "child of a hidden element outerWidth() is wrong see #10413" );
	assert.equal( $divChild.outerWidth( true ), $divNormal.outerWidth( true ), "child of a hidden element outerWidth( true ) is wrong see #10413" );

	assert.equal( $divChild.height(), $divNormal.height(), "child of a hidden element height() is wrong see #10413" );
	assert.equal( $divChild.innerHeight(), $divNormal.innerHeight(), "child of a hidden element innerHeight() is wrong see #10413" );
	assert.equal( $divChild.outerHeight(), $divNormal.outerHeight(), "child of a hidden element outerHeight() is wrong see #10413" );
	assert.equal( $divChild.outerHeight( true ), $divNormal.outerHeight( true ), "child of a hidden element outerHeight( true ) is wrong see #10413" );

	// tests that child div of an unconnected div works the same as a normal div
	assert.equal( $divUnconnected.width(), $divNormal.width(), "unconnected element width() is wrong see #10413" );
	assert.equal( $divUnconnected.innerWidth(), $divNormal.innerWidth(), "unconnected element innerWidth() is wrong see #10413" );
	assert.equal( $divUnconnected.outerWidth(), $divNormal.outerWidth(), "unconnected element outerWidth() is wrong see #10413" );
	assert.equal( $divUnconnected.outerWidth( true ), $divNormal.outerWidth( true ), "unconnected element outerWidth( true ) is wrong see #10413" );

	assert.equal( $divUnconnected.height(), $divNormal.height(), "unconnected element height() is wrong see #10413" );
	assert.equal( $divUnconnected.innerHeight(), $divNormal.innerHeight(), "unconnected element innerHeight() is wrong see #10413" );
	assert.equal( $divUnconnected.outerHeight(), $divNormal.outerHeight(), "unconnected element outerHeight() is wrong see #10413" );
	assert.equal( $divUnconnected.outerHeight( true ), $divNormal.outerHeight( true ), "unconnected element outerHeight( true ) is wrong see #10413" );

	// teardown html
	$divHiddenParent.remove();
	$divNormal.remove();
} );

QUnit.test( "outerHeight()", function( assert ) {
	assert.expect( 11 );

	var $div, div,
		$win = jQuery( window ),
		$doc = jQuery( document );

	assert.equal( jQuery( window ).outerHeight(), $win.height(), "Test on window without margin option" );
	assert.equal( jQuery( window ).outerHeight( true ), $win.height(), "Test on window with margin option" );
	assert.equal( jQuery( document ).outerHeight(), $doc.height(), "Test on document without margin option" );
	assert.equal( jQuery( document ).outerHeight( true ), $doc.height(), "Test on document with margin option" );

	$div = jQuery( "#nothiddendiv" );
	$div.css( "height", 30 );

	assert.equal( $div.outerHeight(), 30, "Test with only width set" );
	$div.css( "padding", "20px" );
	assert.equal( $div.outerHeight(), 70, "Test with padding" );
	$div.css( "border", "2px solid #fff" );
	assert.equal( $div.outerHeight(), 74, "Test with padding and border" );
	$div.css( "margin", "10px" );
	assert.equal( $div.outerHeight(), 74, "Test with padding, border and margin without margin option" );
	assert.equal( $div.outerHeight( true ), 94, "Test with padding, border and margin with margin option" );
	$div.hide();
	assert.equal( $div.outerHeight( true ), 94, "Test hidden div with padding, border and margin with margin option" );

	// reset styles
	$div.css( { "display": "", "border": "", "padding": "", "width": "", "height": "" } );

	div = jQuery( "<div>" );

	// Temporarily require 0 for backwards compat - should be auto
	assert.equal( div.outerHeight(), 0, "Make sure that disconnected nodes are handled." );

	div.remove();
} );

QUnit.test( "passing undefined is a setter #5571", function( assert ) {
	assert.expect( 4 );
	assert.equal( jQuery( "#nothiddendiv" ).height( 30 ).height( undefined ).height(), 30, ".height(undefined) is chainable (#5571)" );
	assert.equal( jQuery( "#nothiddendiv" ).height( 30 ).innerHeight( undefined ).height(), 30, ".innerHeight(undefined) is chainable (#5571)" );
	assert.equal( jQuery( "#nothiddendiv" ).height( 30 ).outerHeight( undefined ).height(), 30, ".outerHeight(undefined) is chainable (#5571)" );
	assert.equal( jQuery( "#nothiddendiv" ).width( 30 ).width( undefined ).width(), 30, ".width(undefined) is chainable (#5571)" );
} );

QUnit.test( "getters on non elements should return null", function( assert ) {
	assert.expect( 8 );

	var nonElem = jQuery( "notAnElement" );

	assert.strictEqual( nonElem.width(), null, ".width() is not null (#12283)" );
	assert.strictEqual( nonElem.innerWidth(), null, ".innerWidth() is not null (#12283)" );
	assert.strictEqual( nonElem.outerWidth(), null, ".outerWidth() is not null (#12283)" );
	assert.strictEqual( nonElem.outerWidth( true ), null, ".outerWidth(true) is not null (#12283)" );

	assert.strictEqual( nonElem.height(), null, ".height() is not null (#12283)" );
	assert.strictEqual( nonElem.innerHeight(), null, ".innerHeight() is not null (#12283)" );
	assert.strictEqual( nonElem.outerHeight(), null, ".outerHeight() is not null (#12283)" );
	assert.strictEqual( nonElem.outerHeight( true ), null, ".outerHeight(true) is not null (#12283)" );
} );

QUnit.test( "setters with and without box-sizing:border-box", function( assert ) {
	assert.expect( 60 );

	// Support: Firefox<29, Android 2.3 (Prefixed box-sizing versions).
	var parent = jQuery( "#foo" ).css( { width: "200px", height: "200px", "font-size": "16px" } ),
		el_bb = jQuery( "<div style='margin:5px;padding:1px;border:2px solid black;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;'></div>" ).appendTo( parent ),
		el = jQuery( "<div style='margin:5px;padding:1px;border:2px solid black;'></div>" ).appendTo( parent );

	jQuery.each( {
		"number": { set: 100, expected: 100 },
		"em": { set: "10em", expected: 160 },
		"percentage": { set: "50%", expected: 100 }
	}, function( units, values ) {
		assert.equal( el_bb.width( values.set ).width(), values.expected, "test border-box width(" + units + ") by roundtripping" );
		assert.equal( el_bb.innerWidth( values.set ).width(), values.expected - 2, "test border-box innerWidth(" + units + ") by roundtripping" );
		assert.equal( el_bb.outerWidth( values.set ).width(), values.expected - 6, "test border-box outerWidth(" + units + ") by roundtripping" );
		assert.equal( el_bb.outerWidth( values.set, false ).width(), values.expected - 6, "test border-box outerWidth(" + units + ", false) by roundtripping" );
		assert.equal( el_bb.outerWidth( values.set, true ).width(), values.expected - 16, "test border-box innerWidth(" + units + ", true) by roundtripping" );

		assert.equal( el_bb.height( values.set ).height(), values.expected, "test border-box height(" + units + ") by roundtripping" );
		assert.equal( el_bb.innerHeight( values.set ).height(), values.expected - 2, "test border-box innerHeight(" + units + ") by roundtripping" );
		assert.equal( el_bb.outerHeight( values.set ).height(), values.expected - 6, "test border-box outerHeight(" + units + ") by roundtripping" );
		assert.equal( el_bb.outerHeight( values.set, false ).height(), values.expected - 6, "test border-box outerHeight(" + units + ", false) by roundtripping" );
		assert.equal( el_bb.outerHeight( values.set, true ).height(), values.expected - 16, "test border-box innerHeight(" + units + ", true) by roundtripping" );

		assert.equal( el.width( values.set ).width(), values.expected, "test non-border-box width(" + units + ") by roundtripping" );
		assert.equal( el.innerWidth( values.set ).width(), values.expected - 2, "test non-border-box innerWidth(" + units + ") by roundtripping" );
		assert.equal( el.outerWidth( values.set ).width(), values.expected - 6, "test non-border-box outerWidth(" + units + ") by roundtripping" );
		assert.equal( el.outerWidth( values.set, false ).width(), values.expected - 6, "test non-border-box outerWidth(" + units + ", false) by roundtripping" );
		assert.equal( el.outerWidth( values.set, true ).width(), values.expected - 16, "test non-border-box innerWidth(" + units + ", true) by roundtripping" );

		assert.equal( el.height( values.set ).height(), values.expected, "test non-border-box height(" + units + ") by roundtripping" );
		assert.equal( el.innerHeight( values.set ).height(), values.expected - 2, "test non-border-box innerHeight(" + units + ") by roundtripping" );
		assert.equal( el.outerHeight( values.set ).height(), values.expected - 6, "test non-border-box outerHeight(" + units + ") by roundtripping" );
		assert.equal( el.outerHeight( values.set, false ).height(), values.expected - 6, "test non-border-box outerHeight(" + units + ", false) by roundtripping" );
		assert.equal( el.outerHeight( values.set, true ).height(), values.expected - 16, "test non-border-box innerHeight(" + units + ", true) by roundtripping" );
	} );
} );

testIframe(
	"dimensions/documentLarge",
	"window vs. large document",
	function( jQuery, window, document, assert ) {
		assert.expect( 2 );

		assert.ok( jQuery( document ).height() > jQuery( window ).height(), "document height is larger than window height" );
		assert.ok( jQuery( document ).width() > jQuery( window ).width(), "document width is larger than window width" );
	}
);

QUnit.test( "allow modification of coordinates argument (gh-1848)", function( assert ) {
	assert.expect( 1 );

	var offsetTop,
		element = jQuery( "<div/>" ).appendTo( "#qunit-fixture" );

	element.offset( function( index, coords ) {
		coords.top = 100;

		return coords;
	} );

	offsetTop = element.offset().top;
	assert.ok( Math.abs( offsetTop - 100 ) < 0.02,
		"coordinates are modified (got offset.top: " +  offsetTop + ")" );
} );

} )();
