module.exports = {
    devServer: {
        port: 8082,
        host: "localhost",
        https: false,
        // 自动启动浏览器
        open: false,
        proxy: {
            "/v1": {
                target: "http://localhost:18080/api",
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                }
            }
        }

    },
    outputDir: '/home/casper/projects/importImage/imageImport/src/main/resources/static',
    publicPath: process.env.NODE_ENV === 'production' ? '/api' : '/',

    pwa: {
        iconPath: {
            favicon32: 'favicon.ico',
            favicon16: 'favicon.ico',
            appleTouchIcon: 'favicon.ico',
            maskIcon: 'favicon.ico',
            msTileImage: 'favicon.ico'
        }
    },

};
