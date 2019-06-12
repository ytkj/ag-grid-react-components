const path = require('path');
const nodeExternals = require('webpack-node-externals')
const { TSDeclerationsPlugin } = require('ts-loader-decleration');

module.exports = {
    entry: path.join(__dirname, 'src/index.ts'),
    output: {
        filename: 'index.js',
        path: __dirname,
        library: 'AgGridReactComponents',
        libraryTarget: 'umd',
        globalObject  : 'this',
    },
    resolve: {
        extensions: ['.ts', '.js', '.tsx', '.jsx'],
    },
    module: {
        rules: [{
            test: /\.(ts|tsx)$/,
            exclude: /(node_modules|test)/,
            use: [{
                loader: 'ts-loader',
            }],
        }],
    },
    plugins: [
        new TSDeclerationsPlugin(),
    ],
    externals: [
        nodeExternals()
    ]
}