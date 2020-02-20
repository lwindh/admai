var webpack=require('webpack');
module.exports = {
    runtimeCompiler:true,
    plugins:[
        new webpack.optimize.CommonsChunkPlugin('common.js'),
        new webpack.ProvidePlugin({
            jQuery: "jquery",
            $: "jquery"
        })
    ]
}
