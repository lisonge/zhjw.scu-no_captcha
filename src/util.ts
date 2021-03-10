/*
 * @Date: 2021-01-09 19:14:33
 * @LastEditors: lisonge
 * @Author: lisonge
 * @LastEditTime: 2021-03-09 16:12:52
 */

// import { GM_xmlhttpRequest } from './@types/tm_f';

export async function proxyLogin(): Promise<boolean> {
  const username = (document.querySelector(
    '#input_username'
  ) as HTMLInputElement).value;
  const password = (document.querySelector(
    '#input_password'
  ) as HTMLInputElement).value;
  const data = {
    'Login.Token1': username,
    'Login.Token2': password,
    goto: 'http://my.scu.edu.cn/loginSuccess.portal',
    gotoOnFail: 'http://my.scu.edu.cn/loginFailure.portal',
  } as { [key: string]: string };
  const up = new URLSearchParams();
  for (const k in data) {
    up.set(k, data[k]);
  }

  return await new Promise(
    (resolve: (value: boolean) => void, reject: (reason?: any) => void) => {
      GM_xmlhttpRequest({
        method: 'POST',
        url: 'http://my.scu.edu.cn/userPasswordValidate.portal',
        data: up.toString(),
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        onload: (response) => {
          const headers = new Headers(
            response.responseHeaders
              .trim()
              .split('\n')
              .map((h) => h.split(':\x20', 2))
          );
          resolve(headers.has('set-cookie'));
        },
        onerror: () => {
          reject('network error');
        },
      });
    }
  );
}

export async function proxyLogout(): Promise<boolean> {
  return await new Promise(
    (resolve: (value: boolean) => void, reject: (reason?: any) => void) => {
      GM_xmlhttpRequest({
        method: 'GET',
        url: 'http://my.scu.edu.cn/destroySSOToken.portal',
        onload: (response) => {
          resolve(true);
        },
        onerror: () => {
          reject('network error');
        },
      });
    }
  );
}
