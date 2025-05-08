const expr = require('express');
var app = expr();

path = require('path')
sp = path.join(__dirname, '../public') // => sp=app.use(expr.static(../public))
app.use(expr.static(sp))

app.get('/about', (req, res) => {
    res.sendFile(sp + '/abc.html')
})
app.listen(5001)