const expr = require('express');
const app = expr();
const router = expr.Router()
const mvi = [
    { id: 101, name: "Avengers", year: 2019, ratings: 9.5 },
    { id: 104, name: "Interstellar", year: 2014, ratings: 8.80 },
    { id: 105, name: "The Matrix", year: 1999, ratings: 9.20 },
    { id: 106, name: "Titanic", year: 1997, ratings: 8.70 },
    { id: 108, name: "The Shawshank Redemption", year: 1994, ratings: 9.40 },
    { id: 109, name: "The Lion King", year: 1994, ratings: 8.90 },
    { id: 110, name: "Avatar", year: 2009, ratings: 9.10 }
];

router.get('/', (req, res) => {
    res.json(mvi)
})

router.get('/:id', (req, res) => {
    var cm = mvi.filter((m) => {
        if (m.id == req.params.id) {
            return true
        }

    })
    if (cm.length == 1) {
        res.json(cm[0])
    }
    else {
        res.json("not found")
    }
})


module.exports=router