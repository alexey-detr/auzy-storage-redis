'use strict';

const Redis = require('ioredis');

module.exports = class RedisStorage {
    /**
     * @param config
     */
    constructor(config) {
        this.redis = new Redis(config);
    }

    set(key, value, ttl = null) {
        let promise = this.redis.set(key, JSON.stringify(value));
        if (ttl) {
            promise = this.redis.expire(key, Math.round(ttl / 1000));
        }
        return promise;
    }

    get(key) {
        return this.redis.get(key)
            .then(value => Promise.resolve(JSON.parse(value)));
    }

    del(key) {
        return this.redis.del(key);
    }
};
