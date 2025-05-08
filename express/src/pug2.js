const expr = require('express');
const app = expr();
app.set('view engine', 'pug')
app.set('views', __dirname + '/../public')
app.get("/", (req, res) => {
    res.render("pug2")

})
app.listen(4250, () => {
    console.log("connected !")
})