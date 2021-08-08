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
      1. images
      2. txt
      3. css/sass - loaders
         ```sh
         client % npm install --save-dev style-loader css-loader sass-loader sass
         ```
      4. babel
         ```sh
         client % npm install --save-dev @babel/core babel-loader @babel/preset-env
         ```
3. Backend server with heroku and test if it is working

# Following Webpack 5 Course

<!-- Currently following 18. Using Latest JavaScript Features With Babel -->
