# Foundation Font Awesome Buttons
![Foundation Version Supported Version](https://img.shields.io/badge/Foundation_For_Sites-v6.2.x-blue.svg?style=flat-square)
![Font Awesome Supported Version](https://img.shields.io/badge/Font_Awesome-v4.6.x-green.svg?style=flat-square)

Foundation Icon Buttons combines the Zurb's Foundation with the Font Awesome project. Building stylish icon buttons is quick and easy.

![Button Preview](https://raw.githubusercontent.com/joshmedeski/foundation-font-awesome-buttons/master/ffab-preview.png)

## How to Use

It's simple! Just add `ffab` and a Font Awesome class to a button

```html
<a href="#" class="button ffab fa-arrow-right">Text</a>
```

[View Docs & Examples](http://joshmedeski.github.io/foundation-font-awesome-buttons//)

## Setup

#### 1. Install the Bower component

Run the following command in the root folder of your project:

```bash
$ bower install foundation-font-awesome-buttons --save-dev
```

#### 2. Include in Sass

Import all the project dependencies in your main Sass file:

```scss
@charset 'utf-8';

@import 'settings';

@import 'foundation';
@import 'font-awesome';
@import 'ffab';

@include foundation-global-styles;
@include foundation-grid;
@include foundation-typography;
@include foundation-button;
@include foundation-button-group;

@include ffab-everything;
```

Make sure your Sass compiler knows where to find all the dependencies.

Here is an example of a GulpFile.js setup using the `Gulp-Sass` `includePaths` option:

```js
var gulp = require('gulp');
var $    = require('gulp-load-plugins')();

var sassPaths = [
  'bower_components/foundation-sites/scss',
  'bower_components/fontawesome/scss',
  'bower_components/foundation-font-awesome-buttons/src',
];

gulp.task('sass', function () {
  return gulp.src('scss/*.scss')
    .pipe($.sass({
      includePaths: sassPaths,
    })
    .on('error', $.sass.logError))
    .pipe($.autoprefixer({
      browsers: ['last 2 versions', 'ie >= 9'],
    }))
    .pipe(gulp.dest('css'));
});

gulp.task('default', ['sass'], function () {
  gulp.watch(['scss/*.scss'], ['sass']);
});
```


## Settings

There are a set of Sass variables that can help make these buttons your own. I recommend adding the following variables to your project's `_settings.scss` file (to follow the Foundation workflow).

```scss
// 37. Foundation Font Awesome Buttons
// - - - - - - - - - - - - - - - -
// $ffab-css-prefix: 'ffab';
// $ffab-default-position: 'after';
// $ffab-border-width: 0;
// $ffab-angle: 15;
// $ffab-transition-speed: 0.3s;
// $ffab-transition-behavior: 'remove'; // @options 'remove', 'cover' or 'none'
// $ffab-overlay-background-color: rgba(255, 255, 255, .1);
// $ffab-has-active-state: true !default;
// $ffab-active-transition-speed: 200ms !default;
// $ffab-active-value: 3px !default;
```

## TODO

- [ ] Update documentation with new class names and more examples
- [ ] Add SassDocs to the entire project
- [ ] Create a CDN CSS to easily add ffab to any project (without Sass!)
- [ ] Create a rounded version
- [ ] Remove background color from hollow buttons
