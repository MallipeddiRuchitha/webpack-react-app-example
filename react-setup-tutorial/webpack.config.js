const path = require('path');

module.exports = {
    
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'public'),
  },
  module:{
      rules:[
          {
              test:/\.js$/,
              exclude:/node-modules/,
              loader:'babel-loader'
          },
          {
              test:/\.css$/,
              use:['style-loader','css-loader']
          }
        //  {
        //     test:/\.scss$/,
        //     use:['style-loader','css-loader','saas-loader']
        // }
      ]
  },
  devtool:'cheap-module-eval-source-map',
  devServer:{
contentBase: path.join(__dirname,'public')
  }
};