# express-react-refresh-boilerplate
A boilerplate for Express 4, React 16, Webpack 5, Babel 7 with SSR and React Fast Refresh.


## 2021-09-01

There wasn't a good example that I could find so I decided to share this.

## Dependencies

I wanted to minimize and itemize all the dependencies that needed. 
You can always add more as your project grows or needs at the moment.

### The Main Ones

 - [express](https://www.npmjs.com/package/express) - Minimal, unopiniated NodeJS framework.
 - [react](https://www.npmjs.com/package/react) - React is a JavaScript library for creating user interfaces.
 - [webpack](https://www.npmjs.com/package/webpack) - A file bundler (and minifier). 
 - [@babel/core](https://www.npmjs.com/package/@babel/core) - Main transpiling library. It changes futuristic JS to common JS.

### Production Dependencies

 - [dotenv-defaults](https://www.npmjs.com/package/dotenv-defaults) - Extracts config information from `.env` files. This one is a little different from [dotenv](https://www.npmjs.com/package/dotenv-defaults) because it looks for `.env.default` to fill in what's missing from `.env`.
 - [react-dom](https://www.npmjs.com/package/react-dom) - Convert react to string.
 - [react-router](https://www.npmjs.com/package/react-router) - Avails a router component to your React.
 - [react-router-dom](https://www.npmjs.com/package/react-router-dom) - Additional compnonents for your React Router.

### Development Dependencies

 - [nodemon](https://www.npmjs.com/package/nodemon) - A dev server that automatically restarts when a file changes.
 - [react-refresh](https://www.npmjs.com/package/react-refresh) - A dev tool that refreshes a component and keeping its state when a file changes
 - [webpack-dev-middleware](https://www.npmjs.com/package/webpack-dev-middleware) - Connects webpack with express. An express development middleware for use with webpack bundles and allows for serving of the files emitted from webpack.
 - [webpack-hot-middleware](https://www.npmjs.com/package/webpack-hot-middleware) - Webpack hot reloading using only `webpack-dev-middleware`. This allows you to add hot reloading into an existing server without webpack-dev-server
 - [@pmmmwh/react-refresh-webpack-plugin](https://www.npmjs.com/package/@pmmmwh/react-refresh-webpack-plugin) - Connects React's fast refresh with webpack.

### Building Dependencies

 - [@babel/preset-env](https://www.npmjs.com/package/@babel/preset-env) - This is the preset you add to babel to do the ES6 syntax to common JS transpiling thing.
 - [@babel/preset-react](https://www.npmjs.com/package/@babel/preset-react) - This is the preset to transpile JSX syntax
 - [@babel/register](https://www.npmjs.com/package/@babel/register) - This is added to the first entry of your client file before requiring. When you do this, it magically transpiles es6 (and JSX) syntax. (It doesn't do it in the file you declare this on however)
 - [@babel/plugin-transform-runtime](https://www.npmjs.com/package/@babel/plugin-transform-runtime) - Sometimes there's a regenerator runtime error when babel compiles. You would see it when running a `mocha` test. This fixes that.
 - [babel-loader](https://www.npmjs.com/package/babel-loader) - This connects babel with webpack
 - [babel-plugin-module-resolver](https://www.npmjs.com/package/babel-plugin-module-resolver) - This is so you can do import aliases
 - [style-loader](https://www.npmjs.com/package/style-loader) - This is so you can import css with webpack
 - [css-loader](https://www.npmjs.com/package/css-loader) - This is so you can transpile `@import` and `url()` in a css file in webpack
 - [webpack-cli](https://www.npmjs.com/package/webpack-cli) - This allows you to bundle files with webpack on the command line
