var hashStr = "A hash string.";
var hash = require("crypto").createHash('sha1').update(hashStr).digest('base64');

module.exports = () => {
    return async (ctx, next) => {
        ctx.set('Access-Control-Allow-Origin', 'http://test.xue.com');
        ctx.set('Access-Control-Allow-Credentials', true);
        ctx.set('Access-Control-Allow-Headers', 'content-type');
        ctx.set('Access-Control-Allow-Methods', 'OPTIONS, GET, HEAD, PUT, POST, DELETE, PATCH');
        ctx.set('cache-control', 'public, max-age=60');
         ctx.set('Etag', hash);
        if (ctx.method == 'OPTIONS') {
            ctx.body = 200; 
        } else {
            await next();
        }
    }
}
