const expr = require('express');
var app = expr();
app.use(expr.static('../public',{index:'mid_task2.html'}))
app.get('/login', (req, res, next) => {
    res.set('content-type', 'text/html')
    res.write("<h1> Welcom </h1>" + req.query.name)
    res.write("<h2> your email is : </h2>" + req.query.email)
    next()
})
app.get('/login', (req, res, next) => {
    if (req.query.newsletter == 'on') {
        res.write("<p> Thank you for subscribe ! </p><br> <a href='/'>logout</a>")
        res.send()
    }
    else {
        res.write("<p> click to subscribe </p> <br> <a href='/sub'>sub</a>")
    }
    next()
})
app.get('/sub', (req, res) => {
    res.set('content-type', 'text/html')

    res.write("<p> you will receive updates</p> <br> <a href='/'>logout</a>")
    res.send()
})
app.listen(3050,()=>{console.log("connected !")})