# vue-multiple-template

> A Vue.js project <br>
> 目前没有解决页面层级不同的问题，.html文件要么是一级，要么是二级。

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```
## Nginx conf
```
location / {
    root   D:\localhost\dist;
    index  index.html index.htm;
    # error_page 404 /views/index.html;
    if (!-e $request_filename) {
        rewrite ^/views/hello$ /views/index.html last;
        break;
    }
    # try_files $uri $uri/ /dist/views/index.html;
}
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
