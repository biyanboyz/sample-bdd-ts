const path = require('path');
module.exports = {
   entry: require('glob').sync('./src/**/*.ts').reduce((p,v,k,a)=>{
       let key = v.slice(0, -3);
       let obj = {};
       obj[key] = v
       return {...p, ...obj}
    },{}),
   output: {
       filename: "[name].js",
       path: path.resolve(__dirname, './out.webpack'),
       libraryTarget: 'commonjs'
   },
   resolve: {
       alias: {
           "@local/app": path.resolve(__dirname, "./src")
       },
       extensions: [".webpack.js", ".web.js", ".ts", ".js"]
   },
   module: {
       rules: [{ test: /\.ts$/, loader: "ts-loader" }]
   },
   devtool: 'inline-source-map'
}