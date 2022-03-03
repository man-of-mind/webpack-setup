const { dirname } = require("path");
const path = require("path");

module.exports = {
    entry: './src/index.js',
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
        publicPath: "./"
    },
    module: {
        rules: [{
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ]
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: "asset/resource"
            }
        ]
    }
}