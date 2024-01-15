const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: './src/renderer/index.tsx',
    target: 'electron-renderer',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                include: /src/,
                use: [{ loader: 'babel-loader' }]
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist/renderer'),
        filename: 'renderer.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/renderer/index.html'
        })
    ],
    resolve: {
        extensions: ['.js', '.ts', '.tsx', '.json']
    }
}