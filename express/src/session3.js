const expr = require('express');
const app = expr();
const sess = require('express-session');
app.use(sess({
    secret: "session 3",
    resave: true,
    saveUninitialized: true,
    //cookie: { maxAge: 10000 }
}));


app.use(expr.static('../public', { index: 'session3.html' }))
app.get('/savesession', (req, res) => {
    req.session.uname = req.query.uname
    req.session.pass = req.query.pass
    res.redirect('fetchdata')
})

app.get("/fetchdata", (req, res)=> {
    if (req.session.uname == 'admin' && req.session.pass == 'admin@123')
    {
        res.send(`<h1> welcome ${req.session.uname}</h1> 
            <a herf="/destroy"> logout</a>`)
    }
    else {
        res.send('<h1> login with admin id </h1>')
    }
})
app.get('/destroy', (req, res) => {
    res.clearCookie("connect.sid")
    res.redirect('/')
})
app.listen(4022, () => {
    console.log("connected ! ")
})