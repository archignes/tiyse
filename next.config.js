const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
    webpack(config, { isServer }) {
        if (!isServer) {
            config.plugins.push(new BundleAnalyzerPlugin({
                analyzerMode: 'static',
                reportFilename: 'bundles.html',
                cache: false
            }));

            config.optimization.splitChunks = {
                chunks: 'all',
                minSize: 20000,
                maxSize: 0,
                minChunks: 1,
                maxAsyncRequests: 30,
                maxInitialRequests: 30,
                automaticNameDelimiter: '~',
                enforceSizeThreshold: 50000,
                cacheGroups: {
                    defaultVendors: {
                        test: /[\\/]node_modules[\\/]/,
                        priority: -10,
                        reuseExistingChunk: true,
                    },
                    default: {
                        minChunks: 2,
                        priority: -20,
                        reuseExistingChunk: true,
                    },
                },
            };
        }

        return config;
    }
};