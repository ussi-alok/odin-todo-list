const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports ={
    entry: "./src/index.js",
    plugins:[
        new HtmlWebpackPlugin({
            title: 'Todo List',
        }),
    ],
    output:{
        filename:'main.js',
        path: path.resolve(__dirname,'dist'),
        // clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader','css-loader'],
            },
        ],
    },
    mode: 'development',
    devtool: 'inline-source-map',
    devServer:{
        static:'./dist',
    },
};