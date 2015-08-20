# Foundation Font Awesome Buttons
![Foundation Version Supported Version](https://img.shields.io/badge/Foundation-v5.5.2-blue.svg?style=flat-square)
![Font Awesome Supported Version](https://img.shields.io/badge/Font_Awesome-v4.4.0-green.svg?style=flat-square)

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

*Note: The brackets [ ] are not required but make for easier legibility.*

## Settings

There are a set of Scss variables that can help make these buttons your own. I recommend adding the following settings to you `_settings.scss` file (in the `05. Buttons` area) to follow the Foundation workflow.

```scss
// Foundation Font Awesome Buttons
// $ffab-css-prefix: 'ffab'; // default: ffab
// $ffab-angle: 15; // degrees
// $ffab-animation-speed: .3s;
// $ffab-animation-behavior: cover; // options: cover or remove (default: remove)
// $ffab-border-radius: radius; // options: none, radius or round (default: none)
// $ffab-is-uppercase: true; // default false
// $ffab-has-shadow: true; // default false
// $ffab-shadow: 0 -3px 0 rgba(0, 0, 0, .1) inset;
```

## Helper Classes

Many of the helper classes Font Awesome offers have been ported to this project.

- `fa-spin` -> `ffab-spin`
- `fa-pulse` -> `ffab-pulse`
- `fa-rotate-90` -> `ffab-rotate-90`
- `fa-rotate-180` -> `ffab-rotate-180`
- `fa-rotate-270` -> `ffab-rotate-270`
- `fa-flip-horizontal` -> `ffab-flip-horizontal`
- `fa-flip-vertical` -> `ffab-flip-vertical`
