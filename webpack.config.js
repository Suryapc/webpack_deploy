const HtmlWebpackPlugin = require('html-webpack-plugin');

const {CleanWebpackPlugin} =require('clean-webpack-plugin');

const path=require('path')

module.exports={
         entry:{
       main:path.resolve(__dirname,'./src/app.js')
                },

      output:{
     filename:'[name].bundle.js',
     path:path.resolve(__dirname,'deploy'),
          },

       devServer:{
                port:3000,
                static:{
                 directory:path.join(__dirname,'src'),
                },
       hot:true,
       historyApiFallback:{
                index:"index.html",
       },
       },

       module:{
         rules:[
         {
         test:/\.js$/,
         exclude:/node_modules/,
         use:{
                loader:'babel-loader',
                options:{
                presets:['@babel/preset-env'],
                          },
               },
         },
         {
                test:/.\css$/,
                use:['style-loader','css-loader'],
              },

      { 
         test:/\.(?:icon|gif|png|jpeg)/i,
         type:"asset/resource",

      },
       ],
       },
       plugins:[
           new HtmlWebpackPlugin({
           title:'webpack output',
            }),
  new CleanWebpackPlugin(),
       ],
};        

 