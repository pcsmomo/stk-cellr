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
   1. webpack config
      1. Loaders
         1. images
         2. txt
         3. css/sass - loaders
            `client % npm install --save-dev style-loader css-loader sass-loader sass`
         4. babel
            `client % npm install --save-dev @babel/core babel-loader @babel/preset-env`
      2. Plugin
         1. TerserPlugin : Minimizing
         2. MiniCssExtractPlugin : extracts CSS into separate files
            `npm install --save-dev mini-css-extract-plugin`
         3. CleanWebpackPlugin : clean build folder before generating new bundle
            `npm install --save-dev clean-webpack-plugin`
         4. HTMLWebpackPlugin
            `npm install --save-dev html-webpack-plugin`
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

# Following Webpack 5 Course

<!-- Currently following 25. Generating HTML Files Automatically During Webpack Build Process -->
<!-- Todo: Use dev server and hot module -->

[DevServer](https://webpack.js.org/configuration/dev-server/) \
[Hot Module](https://webpack.js.org/concepts/hot-module-replacement/)

### Deployment to github page

`npm run deploy`
