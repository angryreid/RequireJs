// require()函数接受两个参数。
// 第一个参数是一个数组，表示所依赖的模块，
// 上例就是['moduleA', 'moduleB', 'moduleC']，即主模块依赖这三个模块；
// 
// 第二个参数是一个回调函数
// 当前面指定的模块都加载成功后，它将被调用。加载的模块会以参数形式传入该函数，
// 从而在回调函数内部就可以使用这些模块。
requirejs.config({
    //By default load any module IDs from js/lib
    //require.js假定这三个模块与main.js在同一个目录，
    //文件名分别为jquery.js，underscore.js和backbone.js，然后自动加载
    // 另一种则是直接改变基目录（baseUrl）。
    // 如果某个模块在另一台主机上，也可以直接指定它的网址，比如：
    baseUrl: 'js/lib',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
        app: '../app',
        preMon:'lastMonth'
    }
});

// 加载文件
require(['preMon'],function(preMon){
    alert(preMon.preMonth(new Date().format()));
});