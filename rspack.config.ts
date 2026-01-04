import path from 'path';
import { rspack, Configuration } from '@rspack/core';
import { fileURLToPath } from 'url';

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

interface BuildEnv {
    mode?: 'production' | 'development';
}

interface Argv {
    mode?: 'production' | 'development';
}

export default (env: BuildEnv, argv: Argv): Configuration => {
    const isProd = argv && argv.mode === 'production';
    return {
        mode: isProd ? 'production' : 'development',
        entry: {
            bundle: path.resolve(__dirname, 'src/index.ts'),
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: '[name][contenthash].js',
            clean: true,
            assetModuleFilename: '[name][ext]',
        },
        devtool: isProd ? 'hidden-source-map' : 'eval-source-map',
        devServer: {
            static: {
                directory: path.resolve(__dirname, 'dist'),
            },
            port: 3000,
            open: true,
            hot: true,
            compress: true,
            historyApiFallback: true,
        },
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: [rspack.CssExtractRspackPlugin.loader, 'css-loader'],
                },
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                        rspack.CssExtractRspackPlugin.loader,
                        'css-loader',
                        {
                            loader: 'sass-loader',
                            options: {
                                implementation: require('sass-embedded'),
                            },
                        },
                    ],
                },
                {
                    test: /\.[jt]s$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env', '@babel/preset-typescript'],
                        },
                    },
                },
                {
                    test: /\.(png|svg|jpg|jpeg|gif)$/i,
                    type: 'asset/resource',
                },
                {
                    test: /\.(woff|woff2|eot|ttf|otf)$/i,
                    type: 'asset/resource',
                },
            ],
        },
        resolve: {
            extensions: ['.ts', '.js', '.json'],
        },
        plugins: [
            new rspack.CopyRspackPlugin({
                patterns: [
                    { from: path.resolve(__dirname, './Icons/Line'), to: 'icons/Line' },
                    { from: path.resolve(__dirname, './Icons/Duotone'), to: 'icons/Duotone' },
                    { from: path.resolve(__dirname, './Icons/Fill'), to: 'icons/Fill' },
                ],
            }),
            new rspack.HtmlRspackPlugin({
                title: 'Sargam Icons',
                filename: 'index.html',
                template: path.resolve(__dirname, 'src/template.html'),
                favicon: path.resolve(__dirname, 'src/favicon.ico'),
                meta: {
                    viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
                },
            }),
            new rspack.HtmlRspackPlugin({
                title: 'Changelog - Sargam Icons',
                filename: 'changelog.html',
                template: path.resolve(__dirname, 'src/changelog.html'),
                favicon: path.resolve(__dirname, 'src/favicon.ico'),
                meta: {
                    viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
                },
            }),
            new rspack.CssExtractRspackPlugin({
                filename: isProd ? '[name][contenthash].css' : '[name].css',
            }),
        ],
    };
};
