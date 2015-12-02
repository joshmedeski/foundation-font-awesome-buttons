# Foundation Font Awesome Buttons
![Foundation Version Supported Version](https://img.shields.io/badge/Foundation-v6.0.4-blue.svg?style=flat-square)
![Font Awesome Supported Version](https://img.shields.io/badge/Font_Awesome-v4.5.0-green.svg?style=flat-square)

Foundation Icon Buttons combines the Zurb's Foundation with the Font Awesome project. Building stylish icon buttons is quick and easy.

## How to Use

Here's a sample of simple foundation button.

```html
<a href="#" class="small info button">Text</a>
```

To add an icon to the button you will need to include `ffab-before` or `ffab-after` to determine the position of the icon from the text.

Finally, you will need to add the Font Awesome icon class name for the icon you want (ex: `fa-arrow-right`).

Your new button will look something like this:

```html
<a href="#" class="small info button [ ffab-after fa-arrow-right ]">Text</a>
```

*Note: The brackets __[ ]__ are not required but make for easier legibility.*


## How to Install

To get started, you have to include install the Bower component. The supported versions of Foundation and Font Awesome are included as dependencies so you only need to install this bower dependencie :)

Run the following command in the root folder of your project:

```bash
bower install foundation-font-awesome-buttons --save-dev
```

Then you have to include the sass files in your main stylesheet (after the Foundation and Font Awesome files):

```scss
// @imports the sass code and mixins (make sure the path is correct!)
@include 'foundation-font-awesome-buttons';

// Outputs the ffab css class names
@include foundation-font-awesome-buttons;
```


## Settings

There are a set of Scss variables that can help make these buttons your own. I recommend adding the following settings to you `_settings.scss` file (in the `05. Buttons` area) to follow the Foundation workflow.

```scss
// Foundation Font Awesome Buttons
$ffab-css-prefix: 'ffab';
$ffab-angle: 15;
$ffab-animation-speed: .3s;
$ffab-animation-behavior: 'remove';
$ffab-overlay: rgba(255, 255, 255, .1);
$ffab-has-shadow: true;
$ffab-shadow-color: rgba(0, 0, 0, .1);
$ffab-shadow-size: 10;
```

## Utility Classes

Many of the helper classes Font Awesome offers have been ported to this project.

- `fa-spin` -> `ffab-spin`
- `fa-pulse` -> `ffab-pulse`
- `fa-rotate-90` -> `ffab-rotate-90`
- `fa-rotate-180` -> `ffab-rotate-180`
- `fa-rotate-270` -> `ffab-rotate-270`
- `fa-flip-horizontal` -> `ffab-flip-horizontal`
- `fa-flip-vertical` -> `ffab-flip-vertical`
