# auzy redis storage

Redis storage package for [auzy](https://github.com/alexey-detr/auzy) based on [ioredis](https://github.com/luin/ioredis)

## Installation and configuration

To use redis as a storage with [auzy](https://github.com/alexey-detr/auzy) you have to install it into your project:

```bash
yarn add auzy-storage-redis
npm i --save auzy-storage-redis
```

In most cases you can just set auzy environment hint without ioredis configuration.

```js
const express = require('express');
const auzy = require('../index');

const auzyConfig = {
    session: {
        // session handler configuration here
    },
};
const auzyEnvironment = {
    framework: 'express',
    storage: 'redis',
};

const server = express();
server.use(auzy(auzyConfig, auzyEnvironment));
server.listen(8080);
```

## Advanced usage example

In case if you have unusual Redis connection settings you can specify them in the auzy storage configuration. Storage config is an [ioredis config object](https://github.com/luin/ioredis/blob/master/API.md#new-redisport-host-options).

```js
const express = require('express');
const auzy = require('../index');

const auzyConfig = {
    session: {
        // session handler configuration here
    },
    storage: {
        port: 6379,          // Redis port
        host: '127.0.0.1',   // Redis host
        family: 4,           // 4 (IPv4) or 6 (IPv6)
        password: 'auth',
        db: 0,
    },
};
const auzyEnvironment = {
    framework: 'express',
    storage: 'redis',
};

const server = express();
server.use(auzy(auzyConfig, auzyEnvironment));
server.listen(8080);
```
