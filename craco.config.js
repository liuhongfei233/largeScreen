const path = require("path");
const { addAfterLoader, loaderByName } = require("@craco/craco");
const resolve = dir => path.resolve(__dirname, dir);
const sassResourcesLoader = {
	loader: require.resolve("sass-resources-loader"),
	options: {
		resources: [resolve("src/utils.scss")]
	}
};
module.exports = {
    webpack:{
        // 添加路径别名
        alias:{
            '@':path.resolve(__dirname,'src')
        },
        configure: (webpackConfig, { env, paths }) => {
            // 修改 publicPath
            paths.appBuild = 'dist' // 修改打包输出文件目录
            webpackConfig.output = {
                ...webpackConfig.output,
                path: path.resolve(__dirname, 'dist'), // 修改打包输出文件目录
                  };
            //注入全局 SASS
            addAfterLoader(webpackConfig, loaderByName("sass-loader"), sassResourcesLoader);
            return webpackConfig;
        }
    }
};