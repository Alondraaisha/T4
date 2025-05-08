const expr = require('express');
var app = expr();
cp = require('cookie-parser')
app.use(cp())
app.use(expr.static('../public', { index: 'cookie2.html' }))
app.get('/next', (req, res) => {
    res.cookie('fname', req.query.uname)
    res.cookie('lname', req.query.lname)
    res.cookie('password', req.query.pwd)
    res.redirect('/admin')
})
app.get('/admin', (req, res) => {
    res.clearCookie("password")
    res.send(req.cookies)
})
app.listen(3064,()=>{console.log("connected !")})