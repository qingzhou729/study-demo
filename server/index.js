const Koa = require('koa');
const middleware = require('./middleware');
// const session = require("koa-session2");
// const Store = require("./utils/Store.js");
const body = require('koa-body');
const etag = require('koa-etag');
const conditional = require('koa-conditional-get');
const static = require('koa-static');
const path = require('path');
const app = new Koa();

// session配置
// app.use(session({
//     store: new Store(),
//     key: "SESSIONID",
// }));
// 解析 post 参数
app.use(body());
app.use(conditional());
app.use(etag());
// 中间件
middleware(app);
const staticPath = './static'
app.use(static(
    path.join( __dirname, staticPath), {
    maxage: 85 * 1000,
}));

const PORT = 3000;
// 服务启动
app.listen(PORT);
console.log(`server is starting at port ${PORT}`);
