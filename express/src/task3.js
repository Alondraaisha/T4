const expr = require('express');
var app = expr();
app.use(expr.static('../public', { index: "task3.html" }))

app.get('/calc', (req, res) => {
    let num1 = parseInt(req.query.n1)
    let num2 = parseInt(req.query.n2 )
    if (num1 >= 0 && num2 >= 0) {
        if (req.query.formula =="addition") {
            let a = num1 + num2
            res.write("Addition :" + a)
        }
        else if (req.query.formula == "subtraction") {
            let b = num1 - num2
            res.write("Subtraction :" + b)
        }
        else if (req.query.formula == "multi") {
            let c = num1 * num2
            res.write("Multiplication:" + c)
        }
        else  if (req.query.formula == "div")
        {
            let d = num1 / num2
            res.write("division" + d)
        }
    }
    else {
        res.write("Enter valid positive integer")
    }
    res.send()
    
})
app.listen(4052,()=>{console.log("Connectedd ! ")})