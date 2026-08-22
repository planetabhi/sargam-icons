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
                                // Use package name string — ESM-safe, avoids require() in ESM context
                                implementation: 'sass-embedded',
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
                    { from: path.resolve(__dirname, './public/robots.txt'), to: 'robots.txt' },
                    { from: path.resolve(__dirname, './public/sitemap.xml'), to: 'sitemap.xml' },
                    { from: path.resolve(__dirname, './public/_headers'), to: '_headers' },
                    { from: path.resolve(__dirname, './public/.well-known'), to: '.well-known' },
                    { from: path.resolve(__dirname, './public/manifest.webmanifest'), to: 'manifest.webmanifest' },
                    { from: path.resolve(__dirname, './public/sw.js'), to: 'sw.js' },
                    { from: path.resolve(__dirname, './public/icon-192.png'), to: 'icon-192.png' },
                    { from: path.resolve(__dirname, './public/icon-512.png'), to: 'icon-512.png' },
                    { from: path.resolve(__dirname, './public/icon-512-maskable.png'), to: 'icon-512-maskable.png' },
                    { from: path.resolve(__dirname, './public/apple-touch-icon.png'), to: 'apple-touch-icon.png' },
                    { from: path.resolve(__dirname, './public/brand.svg'), to: 'brand.svg' },
                    { from: path.resolve(__dirname, './icons.json'), to: '.well-known/sargam-icons.json' },
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
            new rspack.CssExtractRspackPlugin({
                filename: isProd ? '[name][contenthash].css' : '[name].css',
            }),
        ],
    };
};
