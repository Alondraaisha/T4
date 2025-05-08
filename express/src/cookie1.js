const expr = require('express');
var app = expr();
cp = require('cookie-parser')
app.use(cp())
app.get('/', (req, res) => {
    res.cookie('fname', 'aisha')
    res.cookie('lname', 'alondra')
    res.cookie('email', 'a@gmail.com', { maxAge: 10000 })
    res.cookie('pass', 'heheh45')

    res.send('cookie set inspect to application to view')
})

// read cookie
app.get('/cookie', (req, res) => {
    res.write(JSON.stringify(req.cookies))
    res.write(req.cookies.fname)
    res.send()
})

// delete cookie
app.get('/clear', (req, res) => {
    res.clearCookie('pass')
    
    res.send(req.cookies)
})


app.listen(3040, () => {
    console.log("connected !")
})