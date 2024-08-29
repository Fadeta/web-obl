require('dotenv').config()
const PORT = process.env.PORT;
const express = require('express');
const cors = require('cors');
const dbPool = require ('./src/config/database');

const usersRoutes = require('./src/routes/users')
const middlewareLogRequest = require('./src/middleware/log');
const uploadFile = require('./src/middleware/multer');

const app = express();

app.use(middlewareLogRequest);
app.use(express.json());
app.use(cors({ origin: 'http://localhost:8080' }));

app.use('/users', usersRoutes);
app.post('/upload-file', uploadFile);

app.listen(PORT, () => {
    console.log(`Server berhasil di port ${PORT}`);
})