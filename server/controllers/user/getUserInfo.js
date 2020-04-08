
async function getUserInfo(ctx, next) {
    ctx.body = {
        mes: 'ok',
        data: {
            name: 'yyx',
            age: 17,
        },
        success: true,
    };
    return next();
};


module.exports = {
    getUserInfo,
};
