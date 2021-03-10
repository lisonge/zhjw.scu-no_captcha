/*
 * @Date: 2021-03-09 14:53:36
 * @LastEditors: lisonge
 * @Author: lisonge
 * @LastEditTime: 2021-03-09 15:22:36
 */

import { UserScriptHeader } from 'tampermonkey-webpack-plugin';

const h: UserScriptHeader = {
  author: 'https://github.com/lisonge',
  name: '四川大学教务系统无验证码登录',
  namespace: 'http://zhjw.scu.edu.cn/',
  description: '四川大学 教务管理 系统 无验证码登录',
  source: 'https://github.com/lisonge/zhjw.scu-no_captcha.git',
  icon: 'http://zhjw.scu.edu.cn/img/icon/favicon.ico',
  match: 'http://zhjw.scu.edu.cn/*',
  require: ['https://cdn.jsdelivr.net/npm/sweetalert2@10'],
  grant: ['unsafeWindow', 'GM_xmlhttpRequest'],
  connect: ['my.scu.edu.cn', 'dev.songe.li', 'localhost', '127.0.0.1'],
  version: '0.1',
  externals: [
    [
      'note',
      '2021.02-10-V24.20',
      '修复谷歌部分失效的问题 && 修复由于BA失效导致的脚本无效的问题',
    ],
  ],
};
export default h;
