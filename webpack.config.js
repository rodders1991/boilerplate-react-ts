const path = require('path');

module.exports = {
    mode: 'development',
    entry: path.join(__dirname, 'src/app.tsx'),
    devtool: 'cheap-module-eval-source-map',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true,
        port: process.env.PORT || 8080
    },
    module: {
        rules: [{
            test: /\.s?css$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }, {
            loader: 'ts-loader',
            // Regular expression to include all .js files
            test: /\.tsx?$/,
            include: path.resolve(__dirname, 'src'),
            exclude: /node_modules/
          },]
    }
};