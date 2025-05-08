const expr = require('express');
var app = expr();
app.use(expr.static('../public', { index: 'mid_task3.html' }))
app.get('/login', (req, res, next) => {
    res.set('content-type', 'text/html')
    res.write("<h1> Welcom </h1>" + req.query.name)
    res.write("<h2> your pass is : </h2>" + req.query.pass)
    res.write("<p> your msg is : </p>" + req.query.message)

    res.write("<a href='/submit'>show vowel</a>")
    next()
})
app.get('/submit', (req, res) => {
    res.set('content-type', 'text/html')
    const a = req.query.message
    count=0
    for (i in a){
        if (i == 'a' | i == 'e' | i == 'i' | i == 'o' | i == 'u') {
            count++
        }
    }
    res.write("total vovel count is : " + count)

})
app.listen(3060, () => {
    console.log("connected !")
})