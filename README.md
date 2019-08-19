# Cold Snack Theme

There's nothing better in life than a tall, refreshing, cold snack for your tastebuds and your eyeballs.
Reminiscent of the Unofficial Official Beer of Montana, the Cold Snack theme will soothe and satiate your mind
as you create your magical works.

This theme supports most (soon to be all) major themeable parts of the VS Code UI, and provides custom theming for the following formats:

- JavaScript
- Markdown
- Handlebars/HTMLBars
- JSDoc Blocks

![Screenshot 1](https://github.com/evrowe/vscode-cold-snack/raw/master/screenshot1.png)
![Screenshot 2](https://github.com/evrowe/vscode-cold-snack/raw/master/screenshot2.png)
![Screenshot 3](https://github.com/evrowe/vscode-cold-snack/raw/master/screenshot3.png)

## Synth Snack

Add some Synthwave glow to your cold snack!

![Screenshot 4](https://github.com/evrowe/vscode-cold-snack/raw/master/screenshot4.png)

- Install the [Custom CSS and JS Loader extension](https://marketplace.visualstudio.com/items?itemName=be5invis.vscode-custom-css) from the VS Code Marketplace
- Locate `synth-snack.css` in this extension's VS Code install directory or [download it from the github repo](https://github.com/evrowe/vscode-cold-snack)
- Copy/download the file somewhere safe onto your local machine (like your user directory, or where ever you like to keep your projects)
- Copy the file path and add it to your VS Code `settings.json` file, like so:
    ```json
    // MAC OS
    {
      "vscode_custom_css.imports": [
        "file:///Users/{your username}/code/synth-snack.css"
      ]
    }
    // WINDOWS
    {
      "vscode_custom_css.imports": [
        "file:///C:/Users/{your username}/code/synth-snack.css"
      ]
    }
    ```
- Open your command palette with Ctrl + Shift + P or Shift + ⌘ + P and choose "Enable custom CSS and JS". It will prompt you to restart, and then the synth-y, snacky glow will be there to accompany you through the night
    - At this point, VS Code may display a message to say that it is corrupted. This is caused by the custom CSS & JS extension and not this theme. You can click "Don't show again" to dismiss the warning.

_NOTE: Every time you update VS code, you will need to repeat this step to re-enable custom CSS and JS. Similarly, when the theme updates, you will need to copy the updated css to your chosen location._

## Contributing
Contributions are welcome! The Cold Snack theme colors are in `themes/colors.yaml`.
Available elements to style are in the
[Theme Color Reference](https://code.visualstudio.com/docs/getstarted/theme-color-reference).

Individual components of the theme are broken out into separate `yaml` files inside of the `themes` directory. If you wish to add support for additional VS Code UI elements, you can do so in the `workbench.yaml` file.

### Adding Support for a new Language

If you would like to add custom theme support for a new language, create a new `yaml` file for your language and incorporate it into the `build.js` file:

```bash
# in your terminal
touch themes/someLang.yaml
```

```javascript
// build.js

// Add your language theme in the languages section:
langStyles = importTheme(langStyles, 'themes/someLang.yaml');
```

## Shout Outs

Big thanks to [Dan Hedgecock](https://github.com/DHedgecock)'s [Panda Extended Theme](https://github.com/DHedgecock/vscode-panda-extended) for providing a totally rad yaml-based structure for defining colors and rules for super easy theme construction.