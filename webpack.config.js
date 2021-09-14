const fs = require('fs') 
const path = require('path');

const nodeModules = {};
fs.readdirSync('node_modules')
    .filter(x => ['.bin'].indexOf(x) === -1)
    .forEach(mod => nodeModules[mod] = 'comminjs ' + mod)

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: './index.js',
    target: 'node',
    output: {
        path: path.join(__dirname, 'build'),
        filename: '[name].js'
    },
    externals: nodeModules
}