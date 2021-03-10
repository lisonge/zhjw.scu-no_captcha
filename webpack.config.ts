/*
 * @Date: 2021-01-09 16:19:24
 * @LastEditors: lisonge
 * @Author: lisonge
 * @LastEditTime: 2021-03-10 11:25:48
 */

import path from 'path';
import { Configuration } from 'webpack';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import { TampermonkeyWebpackPlugin } from 'tampermonkey-webpack-plugin';
import config from './tampermonkey.config';
export default {
  entry: './src/index.ts',
  devtool: 'source-map',
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ['ts-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.ts'],
  },
  externals: {
    sweetalert2: 'Swal',
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
  },
  optimization: {
    minimize: true,
  },
  plugins: [new CleanWebpackPlugin(), new TampermonkeyWebpackPlugin(config)],
} as Configuration;
