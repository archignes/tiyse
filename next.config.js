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
                minSize: 10000, // Reduced minSize
                maxSize: 25000, // Enable maxSize splitting
                minChunks: 1,
                maxAsyncRequests: 20, // Reduced maxAsyncRequests
                maxInitialRequests: 20, // Reduced maxInitialRequests
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