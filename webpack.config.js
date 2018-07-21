var webpack = require("webpack");

module.exports = {
    entry: "./src/index.js",
    mode: "development",
    output: {
        path:__dirname +"/dist/assets",
        filename: "bundle.js",
        publicPath: "assets"
    },
    devServer:{
        inline: true,
        contentBase: './dist',
        port: 3000
    },
    module:{
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: "babel-loader",
                query:{
                    presets: ["latest","stage-0","react"]
                }
            },
            {
                test: /\.json$/,
                exclude: /(node_modules)/,
                loader: 'json-loader!json-loader'
            }
        ]
    }
}