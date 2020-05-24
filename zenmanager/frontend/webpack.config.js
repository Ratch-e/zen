const path = require("path");

module.exports = {
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                resolve: { extensions: [".js", ".jsx"] },
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.css$/i,
                exclude: /node_modules/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            modules: {
                                mode: "local",
                                exportGlobals: true,
                                localIdentName: "[path][local]",
                                context: path.resolve(
                                    __dirname,
                                    "src/components",
                                ),
                            },
                        },
                    },
                ],
            },
        ],
    },

    devtool: "inline-source-maps",
};
