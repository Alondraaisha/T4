const expr = require('express');
const app = expr();

app.set('view engine', 'pug')
app.set('views', __dirname + '/../public')
app.get("/", (req, res) => {
    res.render('pug3')
})
app.get('/data', (req, res) => {
    res.send("welcome "+req.query.name)
})
app.listen(8020, () => {
    console.log("connected !")
})