// webpack.config.js

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js', // 定義入口點為 src 目錄下的 index.js
    output: {
        filename: 'bundle.js', // 打包後的檔名
        path: path.resolve(__dirname, 'dist'), // 打包後的路徑，此處設定為 dist 目錄
    },
    plugins: [//，即使您在 HTML 文件中未手動添加 <script src="bundle.js">，Webpack 在打包時會自動將生成的 bundle.js 檔案插入到 HTML 文件中。
        new HtmlWebpackPlugin({  
            template: './src/index.html', // 使用 HtmlWebpackPlugin 生成 HTML 檔案
        }),
    ],
};