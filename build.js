const { writeFile, readFileSync } = require('fs');
const yaml = require('js-yaml');

// Quick and easy import + concat
const importTheme = function(target, path = '') {
  return target.concat(yaml.safeLoad(readFileSync(path, 'utf-8')).styles);
};
// Color Vars
const themeColors = yaml.safeLoad(readFileSync('themes/colors.yaml', 'utf-8')).themeColors;
// VS Code UI
const workbench = yaml.safeLoad(readFileSync('themes/workbench.yaml', 'utf-8'));
// Set up language styles array
let langStyles = [];

// Import base theme/colors
let base = require('./themes/cold-snack-base.json');

// Language Imports (Add new languages here!)
langStyles = importTheme(langStyles, 'themes/template.yaml');
langStyles = importTheme(langStyles, 'themes/markdown.yaml');
langStyles = importTheme(langStyles, 'themes/jsdoc.yaml');

// Merge languages into base declarations
base.tokenColors = base.tokenColors.concat(langStyles);

// Merge the base declarations with the VS Code UI styles
Object.assign(base, workbench);

// Convert to string
base = JSON.stringify(base, null, 2);

// Replace theme variable references with actual values
for (let color in themeColors) {
  let colorString = new RegExp(color + '"', 'g');
  base = base.replace(colorString, themeColors[color] + '"');
}

// Write out final theme JSON
writeFile('dist/Cold Snack.json', base, err => {
  if (err) { console.warn(err); }
  console.log('Your Cold Snack is ready.');
});