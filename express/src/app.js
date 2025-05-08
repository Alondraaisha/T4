const expr = require('express');
var app = expr();
app.use(expr.static('../public',{index:'a1.html'}))
app.listen(3004)
