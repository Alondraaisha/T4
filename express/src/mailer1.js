var nm = require('nodemailer')
var trans = nm.createTransport({
    host: "smtp.gmail.com",
    port: 456,
    auth: {
        user: "abc@gmail.com",
        pass: 123456987456

    }
})
var mailoption = {
    from: 'abc@gmail.com',
    to: 'xyz@gmail.com',
    subject: 'test',
    html:'<h1> Hello how are you?</h1>'
}

trans.sendMail(mailoption, (err, info) => {
    if (err) {
        console.log(err)
    }
    else {
        console.log("Mail send")
    }
})