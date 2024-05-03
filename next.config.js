module.exports = {
    webpack(config, { isServer }) {
        if (!isServer) {
            config.optimization.splitChunks = {
                chunks: 'all',
                minSize: 20000, // Smaller minSize to create more chunks
                maxSize: 20000, // Smaller maxSize to limit chunk size
                minChunks: 1,
                maxAsyncRequests: 30, // Increased maxAsyncRequests
                maxInitialRequests: 30, // Increased maxInitialRequests
                automaticNameDelimiter: '~',
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