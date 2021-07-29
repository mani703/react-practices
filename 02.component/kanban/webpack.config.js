const path = require('path');

module.exports = (env) => {
    const entry = path.resolve(`src/${env.src}/index.js`);
    
    return {
        mode: "none",
        entry: entry,
        output: {
            path: path.resolve('public'),
            filename: 'bundle.js',
            assetModuleFilename: 'assets/images/[hash][ext]'
        },
        module: {
            rules: [{
                test: /\.js$/i,
                exclude: /node-modules/,
                loader: 'babel-loader'
            }, {
                test: /\.(sa|sc|c)ss$/i,
                use: [
                    'style-loader', 
                    { loader: 'css-loader', options: { modules: true } }, 
                    'sass-loader'
                ]
            }, {
                test: /\.(png|gif|ipe?g|svg|ico|tiff?|bmp)$/i,
                type: 'asset/resource'
            }]
        },
        devtool: "eval-source-map",
        devServer: {
            contentBase: path.resolve('public'),
            watchContentBase: true,
            host: "0.0.0.0",
            port: 9999,
            inline: true,
            liveReload: true,
            hot: false,
            compress: true,
            historyApiFallback: true
        }
    };
}