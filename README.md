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

