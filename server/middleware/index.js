const http = require('./plugins/http');
module.exports = (app) => {
    app.use(http());
}