/*
 * @Date: 2021-01-09 16:19:24
 * @LastEditors: lisonge
 * @Author: lisonge
 * @LastEditTime: 2021-01-12 21:58:02
 */

import { readFileSync } from 'fs';
import path from 'path';
import TerserPlugin from 'terser-webpack-plugin';

import webpack from 'webpack';

const w = webpack({
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
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          format: {
            comments: 'all',
          },
        },
        extractComments: true,
      }),
    ],
  },
  plugins: [
    new webpack.BannerPlugin({
      banner: (): string => {
        // const reg = /\/\/(\s*)\=\=UserScript\=\=([\s\S]*)\/\/(\s*)\=\=\/UserScript\=\=(\s*)/i;
        // const targetArr = reg.exec(readFileSync('./src/index.ts', 'utf-8')) ?? [
        //   '',
        // ];
        return readFileSync('./tampermonkey.txt', 'utf-8');
      },
      raw: true,
      entryOnly: false,
    }),
  ],
});

// w.watch({}, () => {
//   console.log(new Date().toISOString());
// });
w.run(() => {});

// /\/\/(\s*)\=\=UserScript\=\=([\s\S]*)\/\/(\s*)\=\=\/UserScript\=\=(\s*)/i
