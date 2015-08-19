# Foundation Font Awesome Buttons
![Foundation Version Supported Version](https://img.shields.io/badge/Foundation-v5.5.2-blue.svg?style=flat-square)
![Font Awesome Supported Version](https://img.shields.io/badge/Font_Awesome-v4.4.0-green.svg?style=flat-square)

Foundation Icon Buttons combines the Zurb's Foundation with the Font Awesome project. Building stylish icon buttons is quick and easy.

Here's a sample of simple foundation button.

```html
<a href="#" class="small info button">Text</a>
```

To add an icon to the button you will need to include `fa-before` or `fa-after` to determine the position of the icon from the text.

Finally, you will need to add the Font Awesome icon class name for the icon you want (ex: `fa-arrow-right`).

Your new button will look something like this:

```html
<a href="#" class="small info button [ fa-after fa-arrow-right ]">Text</a>
```

*Note: The brackets [] are not required but make for easier legibility.*
