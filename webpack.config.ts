/*
 * @Date: 2021-01-09 16:19:24
 * @LastEditors: lisonge
 * @Author: lisonge
 * @LastEditTime: 2021-03-14 19:57:36
 */

import { Configuration } from 'webpack';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import { TampermonkeyWebpackPlugin } from 'tampermonkey-webpack-plugin';
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';
import tampermonkeyOptions from './tampermonkey.config';
import { join, resolve } from 'path';

const host = '127.0.0.1';
const port = 8080;
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
    filename: 'bundle.user.js',
    path: resolve(__dirname, 'dist'),
    publicPath: `http://${host}:${port}/`,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new TampermonkeyWebpackPlugin(tampermonkeyOptions),
  ],
  devServer: {
    host,
    port,
    filename: 'index.js',
    disableHostCheck: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
    },
  } as WebpackDevServerConfiguration,
} as Configuration;
