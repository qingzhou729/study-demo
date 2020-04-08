const Router = require('koa-router');
const router = new Router();
const koaCompose = require('koa-compose');

// 接口入口
const {getUserInfo} = require('../controllers/user/getUserInfo');

// 加前缀
router.prefix('/api');

module.exports = () => {
    // 获取用户信息
    router.get('/getUserInfo', getUserInfo);
    return koaCompose([router.routes(), router.allowedMethods()]);
}
