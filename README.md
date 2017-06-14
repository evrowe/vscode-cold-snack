# Cold Snack Theme

There's nothing better in life than a tall, refreshing, cold snack for your tastebuds and your eyeballs.
Reminiscent of the Unofficial Official Beer of Montana, the Cold Snack theme will soothe and satiate your mind
as you create your magical works.

This theme supports most (soon to be all) major themeable parts of the VS Code UI, and provides custom theming for the following formats:
- Markdown
- Handlebars/HTMLBars
- JSDoc Blocks

![Screenshot 1](https://github.com/evrowe/vscode-cold-snack/raw/master/screenshot1.png)
![Screenshot 2](https://github.com/evrowe/vscode-cold-snack/raw/master/screenshot2.png)
![Screenshot 3](https://github.com/evrowe/vscode-cold-snack/raw/master/screenshot3.png)

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