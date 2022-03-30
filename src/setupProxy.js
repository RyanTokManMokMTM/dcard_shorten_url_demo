const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
    app.use(createProxyMiddleware('/api/v1/**', { target: '"http://ec2-3-0-57-41.ap-southeast-1.compute.amazonaws.com:8080/"' }));
    app.use(createProxyMiddleware('/**', { target: '"http://ec2-3-0-57-41.ap-southeast-1.compute.amazonaws.com:8080/"' }));
};