let dbConf = null;
const DEV = {
    database: 'dandelion',    //数据库
    user: 'root',    //用户
    password: '123456',     //密码
    port: '3306',        //端口
    host: '127.0.0.1'     //服务ip地址
}

const PRO = {
    database: 'dandelion',    //数据库
    user: 'root',    //用户
    password: '123456',     //密码
    port: '3306',        //端口
    host: '47.107.188.55'     //服务ip地址
}
dbConf = PRO;
module.exports = dbConf;