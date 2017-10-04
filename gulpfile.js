// Generated on 2015-11-12 using generator-jekyllized 0.7.4
"use strict";

var gulp = require("gulp");
// Loads the plugins without having to list all of them, but you need
// to call them as $.pluginname
var $ = require("gulp-load-plugins")();
// "del" is used to clean out directories and such
var del = require("del");
// BrowserSync isn"t a gulp package, and needs to be loaded manually
var browserSync = require("browser-sync");
// merge is used to merge the output from two different streams into the same stream
var merge = require("merge-stream");
// Need a command for reloading webpages using BrowserSync
var reload = browserSync.reload;
// And define a variable that BrowserSync uses in it"s function
var bs;
var path = require('path');

/*******************************************************************************
 * SERVICE WORKER
 *
 * Builds (or rebuilds) a service worker to cache files on the site's app shell.
 * Rebuilding the service worker invalidates the user's cache on the next
 * visit to the site ensuring they get new files.
 ******************************************************************************/

 gulp.task('generate-service-worker', function(callback) {
   var swPrecache = require('sw-precache'),
       rootDir =  './site';

   swPrecache.write(path.join(rootDir, '/service-worker.js'), {
       staticFileGlobs: [rootDir + '/about/**/*',
                       rootDir + '/*.html',
                       rootDir + '/datasets/**/*',
                       rootDir + '/departments/**/*',
                       rootDir + '/get-started/**/*',
                       rootDir + '/open-source/**/*',
                       rootDir + '/resources/**/*',
                       rootDir + '/stories/**/*',
                       rootDir + '/terms-use/**/*',
                       rootDir + '/tools/**/*',
                       rootDir + '/datasets/**/*',
                       rootDir + '/assets/fonts/*',
                       rootDir + '/assets/img/**/*',
                       rootDir + '/assets/img/*',
                       rootDir + '/assets/scripts/dist/bundle.js',
                       rootDir + '/assets/stylesheets/*.css',
                       rootDir + '/assets/bower_components/paper-*/*.html',
                       rootDir + '/assets/bower_components/paper-*/css/*',
                       rootDir + '/assets/bower_components/px-*/*.html',
                       rootDir + '/assets/bower_components/px-*/css/*',
                       rootDir + '/assets/bower_components/iron-*/*.html',
                       rootDir + '/assets/bower_components/iron-*/css/*',
                       rootDir + '/assets/bower_components/jQuery/dist/jquery.min.js',
                       rootDir + '/assets/bower_components/keen-js/dist/keen.min.js',
                       rootDir + '/assets/bower_components/px-data-table/css/*',
                       rootDir + '/assets/bower_components/font-awesome/fonts/fontawesome*',
                       rootDir + '/assets/bower_components/polymer/polymer*.html',
                       rootDir + '/assets/bower_components/webcomponentsjs/webcomponents-lite.js',
                       rootDir + '/assets/bower_components/webcomponentsjs/webcomponents-lite.min.js',
                       rootDir + '/assets/bower_components/promise-polyfill/promise-polyfill-lite.html',
                       rootDir + '/assets/bower_components/promise-polyfill/Promise.js',
                       rootDir + '/assets/bower_components/px-polymer-font-awesome/*polymer-font-awesome.html',
                       rootDir + '/*.json'],
     stripPrefix: rootDir,
     maximumFileSizeToCacheInBytes: 6000000, //this needed so hydrolysis is cached...
     templateFilePath: rootDir + '/sw.tmpl'
   }, callback);
 });

// Deletes the directory that is used to serve the site during development
gulp.task("clean:dev", del.bind(null, ["serve"]));

// Deletes the directory that the optimized site is output to
gulp.task("clean:prod", del.bind(null, ["site"]));

// Runs the build command for Jekyll to compile the site locally
// This will build the site with the production settings
gulp.task("jekyll:dev", $.shell.task("bundle exec jekyll build"));
gulp.task("jekyll-rebuild", ["jekyll:dev"], function () {
  reload;
});

// Almost identical to the above task, but instead we load in the build configuration
// that overwrites some of the settings in the regular configuration so that you
// don"t end up publishing your drafts or future posts
gulp.task("jekyll:prod", $.shell.task("bundle exec jekyll build --config _config.yml,_config.build.yml"));

// Compiles the SASS files and moves them into the "assets/stylesheets" directory
gulp.task("styles", function () {
  // Looks at the style.scss file for what to include and creates a style.css file
  return gulp.src("src/assets/scss/style.scss")
    .pipe($.sass())
    // AutoPrefix your CSS so it works between browsers
    .pipe($.autoprefixer("last 1 version", { cascade: true }))
    // Directory your CSS file goes to
    .pipe(gulp.dest("src/assets/stylesheets/"))
    .pipe(gulp.dest("serve/assets/stylesheets/"))
    // Outputs the size of the CSS file
    .pipe($.size({title: "styles"}))
    // Injects the CSS changes to your browser since Jekyll doesn"t rebuild the CSS
    .pipe(reload({stream: true}));
});

// Optimizes the images that exists
gulp.task("images", function () {
  return gulp.src("src/assets/img/**/*")
    .pipe($.changed("site/assets/img"))
    .pipe($.imagemin({
      // Lossless conversion to progressive JPGs
      progressive: true,
      // Interlace GIFs for progressive rendering
      interlaced: true
    }))
    .pipe(gulp.dest("site/assets/img"))
    .pipe($.size({title: "img"}));
});

// Copy over fonts to the "site" directory
gulp.task("fonts", function () {
  return gulp.src("src/assets/fonts/**")
    .pipe(gulp.dest("site/assets/fonts"))
    .pipe($.size({ title: "fonts" }));
});

// Copy xml and txt files to the "site" directory
gulp.task("copy", function () {
  return gulp.src(["serve/*.txt", "serve/*.xml", "serve/*.json", "src/CNAME", "src/sw.tmpl"])
    .pipe(gulp.dest("site"))
    .pipe($.size({ title: "xml, txt, json" }))
});

gulp.task("bower_components", function() {
    return gulp.src(["serve/assets/bower_components/**/*"])
        .pipe(gulp.dest("site/assets/bower_components"))
        .pipe($.size({ title: "bower_components" }))
});

gulp.task("html", ["styles"], function () {
  var jsFilter = $.filter("**/*.js", { restore: true });
  var cssFilter = $.filter("**/*.css", { restore: true });
  var htmlFilter = $.filter(['**/*', '!**/*.html'], { restore: true });

  return gulp.src(["serve/**/*.html", '!serve/assets/bower_components/**/*'])
    // Concatenate Files
    .pipe($.useref({searchPath: "serve" }))
    // Only for CSS - Minify
    .pipe(cssFilter)
    .pipe($.cleanCss())
    .pipe(cssFilter.restore)
    // Only for NON-HTML, revision file names
    .pipe(htmlFilter)
    .pipe($.revAll({ ignore: [".eot", ".svg", ".ttf", ".woff", ".csv", ".json", ".jpg", ".png"] }))
    .pipe(htmlFilter.restore)
    // Sub in new file names
    .pipe($.revReplace())
    .pipe(gulp.dest("site"))
    .pipe($.size({title: "optimizations"}));
});

// Run JS Lint against your JS
gulp.task("jslint", function () {
  gulp.src("./serve/assets/javascript/*.js")
    // Checks your JS code quality against your .jshintrc file
    .pipe($.jshint(".jshintrc"))
    .pipe($.jshint.reporter());
});

// Runs "jekyll doctor" on your site to check for errors with your configuration
// and will check for URL errors a well
gulp.task("doctor", $.shell.task("bundle exec jekyll doctor"));

// BrowserSync will serve our site on a local server for us and other devices to use
// It will also autoreload across all devices as well as keep the viewport synchronized
// between them.
gulp.task("serve:dev", ["styles", "webpack:dev", "jekyll:dev"], function () {
  bs = browserSync({
    notify: true,
    // tunnel: "",
    server: {
      baseDir: "serve"
    },
    host: process.env.IP || 'localhost',
    port: process.env.PORT || '3000'
  });
});

// These tasks will look for files that change while serving and will auto-regenerate or
// reload the website accordingly. Update or add other files you need to be watched.
gulp.task("watch", function () {
  //gulp.watch(["src/**/*.md", "src/**/*.html", "src/**/*.xml", "src/**/*.txt", "src/**/*.js"], ["jekyll-rebuild"]);
  gulp.watch(["src/**/*.md", "src/**/*.html", "src/**/*.xml", "src/**/*.txt", "src/**/*.json"], ["jekyll-rebuild"]);
  gulp.watch(["serve/assets/stylesheets/*.css", "serve/assets/scripts/dist/*.js"], reload);
  gulp.watch(["src/assets/scss/**/*.scss"], ["styles"]);
  gulp.watch(["src/assets/scripts/src/**/*.js"], ["webpack:dev"]);
});

gulp.task("webpack:dev", function() {
  return gulp.src("src/assets/scripts/src/**/*.js")
    .pipe($.webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('serve/assets/scripts/dist/'));
});


gulp.task("webpack:prod", function() {
  return gulp.src("src/assets/scripts/src/**/*.js")
    .pipe($.webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('site/assets/scripts/dist/'));
});


// Serve the site after optimizations to see that everything looks fine
gulp.task("serve:prod", function () {
  bs = browserSync({
    notify: false,
    // tunnel: true,
    server: {
      baseDir: "site"
    }
  });
});

// Default task, run when just writing "gulp" in the terminal
gulp.task("default", ["serve:dev", "watch"]);

// Builds the site but doesn"t serve it to you
gulp.task("build", ["jekyll:prod", "styles"], function () {});

// Builds your site with the "build" command and then runs all the optimizations on
// it and outputs it to "./site"
gulp.task("publish", ["build", "html", "bower_components", "images", "fonts", "copy", "webpack:prod"], function () {
  gulp.start("generate-service-worker");
});

