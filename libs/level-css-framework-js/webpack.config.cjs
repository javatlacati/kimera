const webpack = require('webpack');
const path = require("path");

const config ={
    entry:'./src/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'level.js'
    },
}

module.exports = config;