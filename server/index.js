// demo 1
const Koa = require('koa');
const static = require('koa-static');
const path = require('path');
const conditional = require('koa-conditional-get');
const etag = require('koa-etag');
const middleware = require('./middleware/index');
const app = new Koa();

app.use(conditional());
app.use(etag());
app.use(middleware());
const staticPath = './static';
app.use(static(
    path.join( __dirname, staticPath), {
    maxage: 10 * 1000, // 设置cache-control 的max-age缓存时间
}));

const PORT = 8001;
// 服务启动
app.listen(PORT);
console.log(`server is starting at port ${PORT}`);

