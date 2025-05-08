const expr = require('express');
const app = expr();

app.set('view engine', 'pug')
app.set('views', __dirname + '/../public')
app.get("/", (req, res) => {
    res.render('form')
})

app.get('/data', (req, res) => {
    res.render("form_output", {
        name: req.query.name,
        email: req.query.email,
        course: req.query.course
        
        
        
    })
})
 
app.listen(8050, () => {
    console.log("connected !")
})