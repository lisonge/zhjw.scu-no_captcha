/*
 * @Date: 2021-01-09 16:19:24
 * @LastEditors: lisonge
 * @Author: lisonge
 * @LastEditTime: 2021-03-13 21:09:59
 */

import { Configuration } from 'webpack';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import { TampermonkeyWebpackPlugin } from 'tampermonkey-webpack-plugin';
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';
import { header, options } from './tampermonkey.config';
import { join, resolve } from 'path';

const mode = process.env.NODE_ENV as 'production' | 'development';
const isDev = mode == 'development';

export default {
  entry: './src/index.ts',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              configFile: join(__dirname, './src/tsconfig.json'),
            },
          },
        ],
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
    path: resolve(__dirname, 'dist'),
    publicPath: 'http://127.0.0.1:8080/',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new TampermonkeyWebpackPlugin(header, options),
  ],
  devServer: {
    host: '127.0.0.1',
    port: 8080,
    filename: 'index.js',
    disableHostCheck: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
    },
  } as WebpackDevServerConfiguration,
} as Configuration;
