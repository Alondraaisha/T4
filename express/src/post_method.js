const expr = require('express');
var app = expr();
app.use(expr.urlencoded({ extends: true }))
app.use(expr.static('../public', { index: "post_method.html" }))
app.post('/progress', (req, res) => {
    let uname = req.body.name
    let pass = req.body.pwd  
    res.write(uname + " " + pass)
    res.send()
})
app.listen(5026)