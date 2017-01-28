"use strict";
let config = {
    app: {
        port: process.env.PORT || 8888,
        baseApi: '/api',
    },
    mongodb: {
        url: 'mongodb://localhost:27017/vue-blog'
    }
}

export default config;
