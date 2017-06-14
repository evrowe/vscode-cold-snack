const { writeFile, readFileSync } = require('fs');
const yaml = require('js-yaml');

let base = require('./themes/cold-snack-base.json');
const template = yaml.safeLoad(readFileSync('themes/template.yaml', 'utf-8')).styles;
const markdown = yaml.safeLoad(readFileSync('themes/markdown.yaml', 'utf-8')).styles;
const jsdoc = yaml.safeLoad(readFileSync('themes/jsdoc.yaml', 'utf-8')).styles;
const workbench = yaml.safeLoad(readFileSync('themes/workbench.yaml', 'utf-8'));
const themeColors = yaml.safeLoad(readFileSync('themes/colors.yaml', 'utf-8')).themeColors;

base.tokenColors = base.tokenColors.concat(template, markdown, jsdoc);
Object.assign(base, workbench);

base = JSON.stringify(base, null, 2);

for (let color in themeColors) {
  let colorString = new RegExp(color + '"', 'g');
  base = base.replace(colorString, themeColors[color] + '"');
}

writeFile('dist/Cold Snack.json', base, err => {
  if (err) { console.warn(err); }
  console.log('Your Cold Snack is ready.');
});