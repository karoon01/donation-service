const express = require('express');
const mongoose = require('mongoose');
const config = require('config');
const cors = require('cors');
const router = require('./routes');

const PORT = config.get('port') ?? 8080;

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/v1', router);

const start = async () => {
    try {
        await mongoose.connect(config.get('mongoURI'));

        app.listen(PORT, () => {
            console.log(`Server has been started at port: ${PORT}`);
        });
    } catch (e) {
        console.log(`Cannot start a server: ${e.message}`);
        process.exit(1);
    }
};

start();
