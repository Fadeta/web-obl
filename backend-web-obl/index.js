require('dotenv').config()
const PORT = process.env.PORT;
const express = require('express');
const cors = require('cors');
const dbPool = require ('./src/config/database');

const usersRoutes = require('./src/routes/users')
const middlewareLogRequest = require('./src/middleware/log');
const upload = require('./src/middleware/multer');

const app = express();

app.use(middlewareLogRequest);
app.use(express.json());
app.use(cors({ origin: 'http://localhost:8080' }));

app.use('/users', usersRoutes);
app.post('/upload', upload.single('document'), (req, res) => {
    res.json({
        message: 'Upload berhasil'
    });
    
})

app.listen(PORT, () => {
    console.log(`Server berhasil di port ${PORT}`);
})