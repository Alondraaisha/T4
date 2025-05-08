const expr = require('express');
var app = expr();
app.use(expr.static('../public'))
app.get('/get', (req, res) => {
    let name = req.query.fname
    let pass = req.query.pwd
    res.write(name + " " + pass)
    res.send()
})
app.listen(3099, () => { console.log("connected !") })