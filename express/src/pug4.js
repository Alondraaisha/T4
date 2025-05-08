const expr = require('express');
const app = expr();

app.set('view engine', 'pug')
app.set('views', __dirname + '/../public')
app.get("/", (req, res) => {
    res.render('two',{message:"hello",name:"Aisha",id:1})
})
 
app.listen(8030, () => {
    console.log("connected !")
})