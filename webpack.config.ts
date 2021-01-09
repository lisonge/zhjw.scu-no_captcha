/*
 * @Date: 2021-01-09 16:19:24
 * @LastEditors: lisonge
 * @Author: lisonge
 * @LastEditTime: 2021-01-09 20:31:44
 */

import path from 'path';

import Webpack from 'webpack';
const w = Webpack({
  entry: './src/index.ts',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  externals: {
    sweetalert2: 'Swal',
  },
});

// w.watch({}, () => {
//   console.log(new Date().toISOString());
// });
w.run(() => {});
