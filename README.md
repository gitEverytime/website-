#                                  官网脚手架
基于webpack构建的多页面网站开发环境。


webpack在前端开发的过程中逐渐扮演着越来越重要的角色，在使用vuejs开发单页面应用的过程中，个人是倾向于直接使用vue-cli来搭建初期的环境，毕竟方便。但是在做一些需要兼容老版本浏览器（如IE7、8）的时候，我们就需要重新进行框架的选择，此示例中选用了网易的mvvm框架regularjs来进行多页面网站的开发。

此示例已经集成了babel，你完全可以使用es6语法，同时添加了一些其他的插件来进行低版本浏览器的兼容，但是由于测试次数和环境以及一些低版本浏览器特有的兼容方法限制，不能保证100%兼容（需要自行对编译出的文件进行针对IE7、8的兼容性修改），所以当你需要在生产环境中发布编译的文件时，请一定要进行低版本浏览器的测试。

## 文件结构

```
    ├─build (构建webpack环境)
    │  └─build.js             (打包)
    │  └─dev-server.js        (构建开发环境服务)
    │  └─entry.js             (入口)
    │  └─htmlconfig.js        (HTML模板入口)
    │  └─webpack.*.config.js  (生产及开发环境配置)
    ├─config (环境变量)
    ├─dist (文件输出目录)
    └─src (前端开发目录)
    │   │
    │   └─router.js 页面路径定义（路由）
    │   │
    │   └─pages (页面文件)
    │      ├─index.html
    │      │
    │      └─home.html
    │
    └─static (静态资源文件夹)
    │    ├─js     脚本
    │    │
    │    ├─image  图片
    │    │
    │    └─sass   样式表
    │
    └─package.json   项目所需要的各种模块的定义
    │
    └─balelrc        es6转换器
    │
    └─.gitgnore      Git提交过滤
    │
    └─server.js      线上服务启动脚本

# 运行方法：
# git clone 代码
# 如果下载了淘宝镜像，运行cnpm install，如果没有则运行npm install
# 本地环境调试运行 npm run dev
# 生产环境运行 npm run build 打包到dist文件目录里面
# 生产环境本地运行 下载 expess（node服务运行框架）  npm install --save-dev express,
# 下载 pm2(node 运行进程管理) npm install --save-dev pm2
# 下载 http-proxy-middleware(接口代理插件) npm install --save-dev http-proxy-middleware


```


