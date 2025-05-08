const expr = require('express');
const app = expr();
const sess = require('express-session');
app.use(expr.static('../public', { index: 'session2.html' }))

app.use(sess({
    secret: "this is lock",
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 10000 }
}));

app.get('/savesession', (req, res) => {
    req.session.uname = req.query.uname
    req.session.password = req.query.password
    res.redirect('fetchsession')

})
app.get('/fetchsession', (req, res) => {
    res.set('content-type', 'text/html')
    res.write("<h1> welcome </h1> " + req.session.uname + "<a href='/deletesession'>Delete</a>")
    res.send()
})
app.get('/deletesession', (req, res) => {
    req.session.destroy()
    res.redirect('/')

})
app.listen(5012, () => {
    console.log("connected!")
})