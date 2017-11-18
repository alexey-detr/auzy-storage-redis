'use strict';

const Redis = require('ioredis');

module.exports = class RedisStorage {
    /**
     * @param config
     */
    constructor(config) {
        this.redis = new Redis(config);
    }

    set(key, value, expire = null) {
        let promise = this.redis.set(key, value);
        if (expire) {
            promise = this.redis.expire(expire);
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
