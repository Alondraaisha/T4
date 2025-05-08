const expr = require('express');
var app = expr();
app.use(expr.static('../'))
app.listen(3085)