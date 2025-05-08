const expr = require('express');
var app = expr();

app.use(expr.static('../public',))
app.get('/login', (req, res,next) => {
    
    if (req.query.fname == "admin") {
        next()
    }
    else {
        res.write("Login with admin User ")
    }
    
    res.send()
})
app.get('/login', (req, res) => {
    res.write("Welcom Admin")
    res.send()
})
app.listen(4042, () => {
    console.log("connected !")
})