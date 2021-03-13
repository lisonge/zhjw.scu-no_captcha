/*
 * @Date: 2021-01-09 16:12:54
 * @LastEditors: lisonge
 * @Author: lisonge
 * @LastEditTime: 2021-03-13 21:20:06
 */

import Swal from 'sweetalert2';
import { proxyLogin, proxyLogout } from './util';

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
          '<a href="https://github.com/lisonge/zhjw.scu-no_captcha.git" target="_blank">登录说明</a>',
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

