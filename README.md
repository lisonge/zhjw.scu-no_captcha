<!--
 * @Date: 2021-03-13 21:07:58
 * @LastEditors: lisonge
 * @Author: lisonge
 * @LastEditTime: 2021-03-18 15:15:23
-->

# zhjw.scu-no_captcha

四川大学 教务管理 系统 无验证码登录

**greasyfork** 安装链接 [四川大学教务系统无验证码登录](https://greasyfork.org/zh-CN/scripts/419932-%E5%9B%9B%E5%B7%9D%E5%A4%A7%E5%AD%A6%E6%95%99%E5%8A%A1%E7%B3%BB%E7%BB%9F%E6%97%A0%E9%AA%8C%E8%AF%81%E7%A0%81%E7%99%BB%E5%BD%95)

请使用 [四川大学信息门户](http://my.scu.edu.cn/) 的密码 进行登录

## 原理

脚本会拦截登录按钮事件，转而请求 [四川大学信息门户](http://my.scu.edu.cn/) 的登录接口

此接口不需要验证码，而且返回的 HTTP header 中 有对 所有子域名 的 Set-Cookie

```txt
Set-Cookie: iPlanetDirectoryPro=aaabbb; Path=/; Domain=.scu.edu.cn
```

此时再请求 [四川大学 教务管理 系统](http://zhjw.scu.edu.cn/) ，会携带 `cookie: iPlanetDirectoryPro=aaabbb;`

此时系统会认为当前用户已经登录，并且 `Set-Cookie: JSESSIONID=aaabbb;` 然后正常跳转到主页

## 注意

由于真实登录接口已经改变，所以登录时需要使用 [四川大学信息门户](http://my.scu.edu.cn/) 的登录密码

登录后可改密码与 **教务管理系统** 一致，在使用上就做到了 **无验证码登录**

## 示例

![avatar](https://hub.fastgit.org/lisonge/src/raw/main/gif/zhjw.scu-no_captcha_example.gif)
