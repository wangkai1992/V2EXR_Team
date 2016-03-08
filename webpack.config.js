var webpack = require('webpack');
var path = require('path');


module.exports = {
    entry: {
        liaokaien: "./src/liaokaien/main.js"
    },
    output: {
        path: path.resolve(__dirname, 'bin'),
        filename: "[name].entry.js"
    },
    module: {
        loaders: [
            {
                test:/\.scss$/,
                loader: 'style-loader!css-loader!sass-loader'
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader'
            },
            { 
                test: /\.js$/, 
                exclude: /node_modules/, 
                loader: "babel-loader"
            }
        ],
        resolve: {
            extensions: ['', '.js', '.scss', '.css']
        }
    }
    
}