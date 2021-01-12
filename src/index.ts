/*
 * @Date: 2021-01-09 16:12:54
 * @LastEditors: lisonge
 * @Author: lisonge
 * @LastEditTime: 2021-01-12 22:01:35
 */

import { proxyLogin, proxyLogout } from './util';
import Swal from 'sweetalert2';

if (location.pathname.startsWith('/login')) {
  ['#input_checkcode', '#native > a']
    .map((s) => document.querySelector(s) as HTMLElement)
    .forEach((el) => {
      el?.parentNode?.removeChild(el);
    });
  const loginButton = document.querySelector(
    '#loginButton'
  ) as HTMLInputElement;
  loginButton.onclick = () => {};
  const form = document.querySelector('#native') as HTMLFormElement;
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const successIn = await proxyLogin();
    if (successIn) {
      location.href = location.href;
    } else {
      console.log('login error.');
      Swal.fire({
        icon: 'error',
        title: '登录失败',
        text: '账号/密码错误',
        footer:
          '<a href="http://my.scu.edu.cn/index.portal" target="_blank">去这里登录</a>',
      });
    }
  });
} else {
  const logoutEl = document.querySelector('#logout') as HTMLAnchorElement;
  const logoutHref = logoutEl.href + '';
  logoutEl.href = 'javascript:void(0);';
  logoutEl.addEventListener('click', async () => {
    const success = await proxyLogout();
    if (success) {
      console.log(logoutHref);
      location.href = logoutHref;
    } else {
      console.log('logout error.');
    }
  });
}

/*else {
  if (document.cookie.includes('iPlanetDirectoryPro')) {
    proxyLogout();
  }
}

*/
