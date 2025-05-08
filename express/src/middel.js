const expr = require('express');
var app = expr();
const cb1 = (req, res, next) => {
    res.write("hello ")
    next()
}
const cb2 = (req, res, next) => {
    res.write("Addition is : " + (5 + 5) + " ")
    next()
}

app.use('/data', cb1, cb2)
app.get('/data', (req, res) => {
    res.write("welcome")
    res.send()
})
app.listen(5035)
