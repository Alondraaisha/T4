const expr = require('express');
var app = expr();
app.use(expr.static("../css"))
app.use(expr.static("../img"))

app.use(expr.static('../html', { index: '1.html' }))

app.listen(3010,()=>{console.log('connected')})

