const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const fs = require('fs') 
const path = require('path');

// fs.readdirSync('node_modules')
// .filter(x => ['.bin'].indexOf(x) === -1)
// .forEach(mod => nodeModules[mod] = 'comminjs ' + mod)

const isDev = process.env.NODE_ENV === 'development'

const filename = ext => isDev ? `[name].${ext}` : `[name].${ext}`;

const nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
})
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
});
module.exports = {
    context: path.resolve(__dirname, './src'),
    entry: './main',
    output: {
        filename: filename('js'),
        path: path.resolve(__dirname, 'build'),
    },
    target: 'node',
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    externals: nodeModules,
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: '/node_modules/'
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin()
    ]
}