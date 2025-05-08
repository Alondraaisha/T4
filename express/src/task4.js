//create one file  add username ,  password , submit , by post method
// sumbit buton should black bg white text
// on home page form should be display in  /login welsome again
//please login with  admin name

const expr = require('express');
var app = expr();
app.use(expr.urlencoded({ extends: true }))
app.use(expr.static('../public', { index: "ljform.html" }))
app.post('/login', (req, res) => {
    let uname = req.body.name
    let pass = req.body.pwd 
    if (uname != "admin") {
        res.write("Please login with admin name")
    }
    else {
        res.write(uname + " " + pass)
    }
    
    res.send()
})
app.listen(5086)