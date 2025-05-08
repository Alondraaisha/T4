const expr = require('express');
var app = expr();
app.use(expr.static('../public'))
app.listen(3006)