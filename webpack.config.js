var webpack = require('webpack');
module.exports = {
    entry: {
        entry1: './index.js'
    },
    output: {
        path: __dirname,
        filename: 'web.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel',
			exclude:/node_modules/,
			query:{
				presets:["es2015",'react']
			}
        }, {
            test: /\.jsx$/,
            loader: 'babel-loader!jsx-loader?harmony'
        }]
    },
};
