<!--
 * @Date: 2021-03-13 21:07:58
 * @LastEditors: lisonge
 * @Author: lisonge
 * @LastEditTime: 2021-03-13 21:36:28
-->

# zhjw.scu-no_captcha

四川大学 教务管理 系统 无验证码登录

请使用 [四川大学信息门户](http://my.scu.edu.cn/) 的密码 进行登录

## 原理

脚本会拦截登录按钮事件，转而请求 [四川大学信息门户](http://my.scu.edu.cn/) 的登录接口

此接口不需要验证码，而且返回的 HTTP header 中 有对 所有子域名 的 Set-Cookie

```txt
Set-Cookie: iPlanetDirectoryPro=aaabbb; Path=/; Domain=.scu.edu.cn
```

此时再请求 [四川大学 教务管理 系统](http://zhjw.scu.edu.cn/) ，会携带 `cookie: iPlanetDirectoryPro=aaabbb;`

此时系统会认为当前用户已经登录，并且 `Set-Cookie: JSESSIONID=aaabbb;` 然后跳转到主页

无验证码登录流程如上

## 注意

由于真实登录接口已经改变，所以登录时需要使用 [四川大学信息门户](http://my.scu.edu.cn/) 的登录密码

登录后可改密码与 `教务管理系统` 一致，在使用上就做到了 `无验证码登录`
