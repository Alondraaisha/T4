const expr = require('express');
const app = expr();
multer = require('multer')


var store = multer.diskStorage({
    destination: 'single',
    filename: (req, file, cb) => {
        cb(null,file.originalname)
    }
})
const upload = multer({ storage: store }).single('myfile')

app.use(expr.static('../public', { index: 'multer.html' }))
app.post('/data', upload, (req, res) => {
    if (req.file)
    {
        res.send(`<h2> file ${req.file.originalname} is uploaded in ${req.file.destination} folder</h2>`)
    }
})
app.listen(5026, () => {
    console.log("connected ! ")
})