const expr = require('express');
const app = expr();
const sess = require('express-session');

app.use(sess({
    secret: "this is lock",
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 10000 }
}));

app.get('/', (req, res) => {
    if (req.session.page) {
        req.session.page++;
        res.send(`You visited this page ${req.session.page} times`);
    } else {
        req.session.page = 1;
        res.send("Welcome to my website");
    }
});

app.listen(5024, () => {
    console.log("Connected!");
});
