/*
 * @Date: 2021-03-09 14:53:36
 * @LastEditors: lisonge
 * @Author: lisonge
 * @LastEditTime: 2021-03-15 20:42:31
 */

import { Options } from 'tampermonkey-webpack-plugin';

export default {
  header: {
    author: 'https://github.com/lisonge',
    name: '四川大学教务系统无验证码登录',
    namespace: 'https://dev.songe.li/',
    description: [
      '四川大学 教务管理 系统 无验证码登录',
      [
        'en',
        'Sichuan University Academic Affairs Management System Login without verification code',
      ],
    ],
    source: 'https://github.com/lisonge/zhjw.scu-no_captcha.git',
    icon: 'http://zhjw.scu.edu.cn/img/icon/favicon.ico',
    match: [
      'http://zhjw.scu.edu.cn/*',
      'https://zhjw.scu.edu.cn/*',
      '202.115.47.141/*',
      /http(s?):\/\/zhjw\.scu\.edu\.cn(.*)/,
    ],
    require: ['https://cdn.jsdelivr.net/npm/sweetalert2@10'],
    grant: ['unsafeWindow', 'GM_xmlhttpRequest'],
    connect: ['my.scu.edu.cn', 'dev.songe.li', 'localhost', '127.0.0.1', '*'],
    version: '0.1.2',
    externals: [['note', 'hello']],
  },
  minAlignSpace: 4,
  devServer: {
    proxyUserJsFileName: 'dev-server.user.js',
  },
} as Options;
