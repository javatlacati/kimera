const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    module: {
        rules:[
            {
                test: /\.s[ac]ss$/,
                use: [
                    "css-loader",
                    "sass-loader"
                ]
            }
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '_[id].css',
        }),
    ]
}