# STK Cellr Website

## Stacks

1. Front
   - React
   - React Hook
   - Material CSS
   - SCSS
2. Apis
   - Email API : Lambda AWS
   - Google Map API
   - Tweeter API
3. Product
   - Webpack : build
   - Heroku : server

### SCSS

[SCSS Guidline 7-1 pattern](https://sass-guidelin.es/#the-7-1-pattern)

### Webpack

### Heroku

heroku -v
heroku login
heroku apps:create stkcellr
git push heroku main

#### Work

1. Set up the backend node/express server
2. Set up the front end part and build with webpack
   1. install react
      `client % npm install --save react react-dom`
   2. webpack config
      1. Loaders
         1. images
         2. txt
         3. css/sass - loaders
            `client % npm install --save-dev style-loader css-loader sass-loader sass`
         4. postcss
            `client % npm install --save-dev postcss-loader autoprefixer`
         5. babel
            `client % npm install --save-dev @babel/core babel-loader @babel/preset-env @babel/preset-react`
      2. Plugin
         1. TerserPlugin : Minimizing
         2. MiniCssExtractPlugin : extracts CSS into separate files
            `npm install --save-dev mini-css-extract-plugin`
         3. CleanWebpackPlugin : clean build folder before generating new bundle
            `npm install --save-dev clean-webpack-plugin`
         4. HTMLWebpackPlugin
            `npm install --save-dev html-webpack-plugin`
      3. Dev server
         `npm install webpack-dev-server --save-dev`
   3. eslint config
      1. Install
         `npm install --save-dev eslint eslint-plugin-react eslint-plugin-react-hooks`
3. Deploy to github page
   1. install gh-page
      `npm install --save-dev gh-pages`
   2. Configure package.json
      ```json
      {
        "homepage": "https://pcsmomo.github.io/stk-cellr",
        "scripts": {
          "predeploy": "yarn build",
          "deploy": "gh-pages -d build"
        }
      }
      ```
   3. Deploy
      `npm run deploy`
4. (X) Backend server with heroku and test if it is working

## Following Webpack 5 Course

Ready to go with React!

### Deployment to github page

`npm run deploy`

### Links

[DevServer](https://webpack.js.org/configuration/dev-server/) \
[Webpack Dev Server](https://github.com/webpack/webpack-dev-server)

### To do

1. [Webpack Configurator](https://createapp.dev/webpack)
2. Figure what I need more
   1. React
   2. Jest
   3. Babel
   4. CSS, PostCSS, SASS
   5. ESLint, Prettier
      1. Check ESLint configurations
   6. HTML webpack plugin, MiniCssExtract Plugin, CleanWebpack Plugin
      1. what is Webpack Bundle Analyzer, CopyWebpack Plugin?
   7. React hot loader
3. See package.json and configurations
4. Install React
5. Take all these steps and setup for only the frontend server for Recipe Project
