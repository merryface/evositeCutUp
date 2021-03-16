# Evosite Interview Cut Up
![GitHub repo size](TODO: ADD URL)

## What is This Website?<br>
This website is a template Cut Up created as a demo of my web building skills for an interview with Evosite. 


## Gulp
`npm init -yes` was used in the command line to install npm. This created a `package.json` file, where the packages installed are listed. After that gulp was installed using `npm gulp install`.
The packages were installed by running `gulp install {package-name}` in the command line. This downloads the specific packages required.

### gulpfile.js
The `gulpfile.js` file contains all the methods used in order to:
- Turn all SCSS files into a single CSS file, for browser compatibility
- Concatinate all JS files into one
- Minify the CSS, and uglify the JS, for performance improvements
- Create a `watch` task that automatically runs these tasks when changes are applied to the developer files.

The final CSS and JS files which are linked into the final project have the `.min.{fileType}`.

### Replicating Workspace
To replicate the workspace, Run `TODO: ADD URL` followed by `npm install`. This should set up a local workspace.

## SCSS Layout
All SCSS files are stored in the scss file. All styling is done in scss and applied to each page using `style.min.css`.

## Bootstrap
Bootstrap is being used by importing it as a link in the header of the [index.html](index.html) file instead of installing locally. This has been done for ease of use and reducing the project directory size.

Further guidance to install bootstrap directly into the project can be found in the [Bootstrap Documentation](https://getbootstrap.com/docs/4.0/getting-started/theming/).

---

# Dev Planning
Preparation work prior to development of the project. This is not documentation as much as it is a way for keeping track of what tasks have been completed. ✅

## Prep
- Typography
- Variables
  - Colours
  - font-sizes
  - padding/margin


## Atoms
- header button
- mobile menu burger
- facebook button
- twitter button
- search button
- Header Nav item
- Footer Nav item
- hero down arrow
- primary button (with hover)
- secondary button
- News link
- Carouselle left & right buttons (with hover)
- Footer Menu Link
- Footer Terms

## Molecules
- Logo
- Join us -> search button
- Nav bar
- Hero text
- Right side
- Latest News
- Article Card
- Footer upper third
  - Logo
- Footer middle third
  - Address
  - Contact details
  - Nav menu
- Footer lower third
  - Copyright and company registration
  - Legal links
  - Design attribution

## Organisms
- Header
- Hero
- Featured Article
- Latest News
- Footer
---
### Useful For copy-pasting
Colours:
- White: FFFFFF
- PrimaryDarker: #0C0228
- ButtonPrimary: #2F5C7C -> hover 0.3 opacity
- Secondary: #B7BDC1
- PurplePrimary: #283163
- ArticleDate: #ACA7B2

Typography:
- Merriweather
  - Weights: 300, 700
- Montserrat:
  - Weights: 300, 400, 600, 700