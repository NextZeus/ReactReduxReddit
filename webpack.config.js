var debug = process.env.NODE_ENV !== 'production';
var webpack = require('webpack');

module.exports = {
    context: __dirname,
    devtool: debug ? "inline-sourcemap" : null,
    entry: __dirname+"/containers/Root.js",
    output:{
        path: __dirname + "/build/",
        filename: "client.min.js"
    },
    plugins: debug ? [] : [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            mangle : false,
            sourcemap: false,
            compress:{
                warnings:false
            },
            output:{
                comments:false
            }
        })
    ]
}