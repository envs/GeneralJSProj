const path = require('path');
const webpack = require('webpack');

// You can build and serve this (for our React Application) by running:
// OLD      $ npx webpack-dev-server --mode development
// NEW  $ npx webpack serve     OR      $  npx webpack serve --env mode

// Instead of running the above from the terminal everytime, just configure 
// this in package.json under "scripts":
// "dev": "npx webpack serve --mode development --env development"
// Then run this at the terminal    $ npm run dev

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                options: { presets: ["@babel/env"] }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    resolve: { extensions: ['*', '.js', 'jsx'] },
    output: {
        path: path.resolve(__dirname, 'dist/'),
        publicPath: '/dist/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.join(__dirname, 'public/'),
        port: 3000,
        publicPath: 'http://localhost:3000/dist/',
        hotOnly: true
    },
    plugins: [new webpack.HotModuleReplacementPlugin()]
};