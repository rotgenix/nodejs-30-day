const NodeCache = require('node-cache');
const cache = new NodeCache();

module.exports = duration => (req, res, next) => {
    const key = req.originalUrl;

    let cacheResponse = cache.get(key);

    if (cacheResponse) {
        res.send(`Result from CacheResponse`);
    } else {
        res.originalSend = res.send;
        res.send = body => {
            res.originalSend(body);
            cache.set(key, body, duration);
        }
        next();
    }
}
