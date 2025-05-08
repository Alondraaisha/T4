const express = require('express');
const app = expr();
const router = expr.Router()

router.get('/', (req, res) => {
    for (i of data) {
        res.write(i.name + " " + i.branch)
        
    }
    res.send()
})

router.get('/id/:id', (req, res) => {
    var cd = data.filter((i,) => {
        i.id==req.params.id
    })
    if (cd.length > 0) {
        res.send(cd)
    }
    else {
        res.send('not found')
    }
})
