const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
    webpack(config, { isServer }) {
        if (!isServer) {
            config.plugins.push(new BundleAnalyzerPlugin({
                analyzerMode: 'static',
                reportFilename: 'bundles.html'
            }));
        }

        return config;
    }
};