const expr = require('express');
const app = expr();
multer = require('multer')


var store = multer.diskStorage({
    destination: 'multiple',
    filename: (req, file, cb) => {
        cb(null,file.originalname)
    }
})
const upload = multer({ storage: store }).array('myfile', 3) //({ storage: store , limits:{fileSize : 1000000}}) to select specific size of file

app.use(expr.static('../public', { index: 'multer2.html' }))
app.post('/data', upload, (req, res) => {
    if (req.files) {
        for (i of req.files){
            res.write("file"+JSON.stringify(i.originalname))
        }
        res.send()
    }
    
})
app.listen(5042, () => {
    console.log("connected ! ")
})