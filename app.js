var koa = require('koa');
var app = koa();

// generator函数，返回遍历器对象，可以使用yield
// 执行顺序，遇到yield next执行下一个中间件，没有下一个中间件逆序返回继续执行代码。
app.use(function *(next){
    var start = new Date;
    yield next;
    var ms = new Date - start;
    this.set('X-Response-Time', ms + 'ms');
})

app.use(function *(next){
  var start = new Date;
  yield next;
  var ms = new Date - start;
  console.log('%s %s - %s', this.method, this.url, ms);
});

// app.name  .env  .proxy   .subdomainOffset
app.use(function *(){
    console.log(this);   //ctx, ctx.request/req; ctx.response/res; res.statusCode, res.writeHead(), res.write(), res.end(), ctx.app
    console.log(this.request);  //ctx.ookies.get(name)  
    console.log(this.response);
    this.body = 'hello world';
})
app.listen(3001);

// ctx.throw(msg, status, properties)  等同于
// err = new Error('msg')  err.status, throw err;
// ctx.assert(value, msg, status, properties)
// this.respond = false, 不用内置的response, 自己设置该对象

app.on('error', function(err, ctx){
    log.error('server error', err, ctx)
})

module.exports = app;