## 【百度前端学院2016春季班】V2EXR团队热身项目之团队介绍页面临摹

### 团队成员
- 廖凯恩 [@liaokaien](https://github.com/liaokaien)

### 热身目的
五位团队成员分别对 [http://www.greensplashdesign.com/team/](http://www.greensplashdesign.com/team/)的页面布局及样式进行临摹，相互对比学习，以达到相互了解技术水平，取长补短，磨合团队等目标。 

热身项目使用 Webpack 进行前端资源整合，通过 Github 进行版本控制，使用 SASS 进行 CSS 预处理。 对热身项目来说虽有过度工程之嫌，但从长期开有助于团队成员熟悉先进的 workflow，了解新技术。

### 热身规则
- 临摹过程中，原则上不能对原页面的代码进行复制粘贴式的抄袭，而应该根据页面的视觉效果倒推出合理的 DOM 结构和 CSS 样式规则。
- 页面命名规则： 请将自己的 `$name.html` 页面放在`/pages`目录下。 如廖凯恩的临摹页面应该放在 `/page/liaokaien.html`。
- 静态资源路径规则: 请将自己的静态资源放在 `/src/$name/js` 及 `/src/$name/style` 下。另： 默认`/src/$name/main.js`为 Webpack 打包的入口文件， 
- Webpack 打包规则： `Webpack`会把每个人所有的静态资源打包到 `/build/$name.entry.js`。 HTML页面 不需要引用除 `/build/$name.entry.js` 以外的任何外部文件。

### Webpack
- clone 到本地后先在项目目录下运行 `npm install`；
- 在项目目录下下运行 `npm run webpack` 执行 webpack 任务；
- 在项目目录下运行 `npm run server` 启动测试服务器(需要全局安装**http-server**: `npm install -g http-server`)；

_有关`Webpack`的更多信息，可以参考[官方文档及教程](http://webpack.github.io/docs/tutorials/getting-started/)_
