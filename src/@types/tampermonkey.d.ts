/*
 * @Date: 2021-01-09 17:26:47
 * @LastEditors: lisonge
 * @Author: lisonge
 * @LastEditTime: 2021-01-09 19:19:59
 */

declare const GM_xmlhttpRequest: (details: {
  method: 'GET' | 'POST' | 'HEAD';
  url: string;
  data?: string;
  headers?: { [key: string]: string };
  onload?: (response: {
    responseText: string;
    responseHeaders: string;
    status: number;
    finalUrl: string;
  }) => void;
  onerror?: () => void;
  fetch?: typeof fetch;
}) => void;
