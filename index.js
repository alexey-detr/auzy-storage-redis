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
        let promise = this.redis.set(key, value);
        if (ttl) {
            promise = this.redis.expire(ttl);
        }
        return promise;
    }

    get(key) {
        return this.redis.get(key);
    }

    del(key) {
        return this.redis.del(key);
    }
};
