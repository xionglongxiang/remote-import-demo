这里实现了一个运行时去“加载+调用”模块的demo。
可以解决部分微前端架构中，子应用之间相互调用对方模块的问题。

1，启动sub-module
```
yarn 
yarn build
yarn serve
```

2，启动main-app
```
yarn 
yarn serve
```