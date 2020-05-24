const path = require("path");

module.exports = {
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "ts-loader",
                    },
                ],
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader",
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

    resolve: {
        extensions: [".ts", ".tsx", ".js"],
    },

    devtool: "inline-source-maps",
};
