const expr = require('express');
var app = expr();
cp = require('cookie-parser')
app.use(cp())
app.use(expr.urlencoded())
app.use(expr.static('../public', { index: 'cookie3.html' }))
app.post('/submit-feedback', (req, res) => {
    const { name, email, message, rating } = req.body
    const feedback = { name, email, message, rating }
    res.cookie('fed', feedback, { maxAge: 10000 })
    res.send('</h1>Thank you for feedback </h1> <a href="/fd">show feedback</a>')
})
app.get('/fd', (req, res) => {
    const fed = req.cookies.fed
    if (fed) {
        res.send(`<h1> Feedback details </h2>       
            <p> Name : ${fed.name}</p>
            <p> email : ${fed.email}</p>
            <p> msg: ${fed.message}</p>
            <p> rating : ${fed.rating}</p>
            <a href='/'> logout</a>`)
    }
    else {
        res.send("No feedback available")
    }
})

app.listen(5066, () => {
    console.log("connected !")
})