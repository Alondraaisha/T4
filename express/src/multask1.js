const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Create an instance of express app
const app = express();

// Define the upload folder for files (create it if it doesn't exist)
const uploadFolder = './File';
if (!fs.existsSync(uploadFolder)) {
    fs.mkdirSync(uploadFolder);
}

// Set up multer to store files in the 'File' folder with specific naming format
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadFolder); // store files in 'File' directory
    },
    filename: (req, file, cb) => {
        const fieldName = req.body.data;
        cb(null, `${fieldName}-file.pdf`); // save the file as 'data-file.pdf'
    }
});

const upload = multer({ storage });

// Serve static files like form.html and effect.css from the public folder
app.use(express.static('public'));

// Route to render the form
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'multask1.html'));
});

// Route to handle file upload
app.post('/upload', upload.single('data'), (req, res) => {
    if (req.file) {
        // Show the result on the /upload page after successful upload
        res.send(`
            <html>
                <head>
                    <link rel="stylesheet" href="/effect.css">
                    <style>
                        .message {
                            text-align: center;
                            font-size: 20px;
                            margin-top: 20px;
                        }
                        .effect {
                            color: green;
                            font-weight: bold;
                            animation: fadeIn 2s ease;
                        }
                        @keyframes fadeIn {
                            from { opacity: 0; }
                            to { opacity: 1; }
                        }
                    </style>
                </head>
                <body>
                    <div class="message">
                        <p class="effect">${req.file.originalname} has been uploaded successfully!</p>
                    </div>
                </body>
            </html>
        `);
    } else {
        res.status(400).send('No file uploaded!');
    }
});

// Set the server to listen on port 3000
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
