const express = require("express");
const mongoose = require("mongoose");

const app = express();

const PORT = process.env.PORT ?? 8080;

const start = async () => {
    try {
        await mongoose.connect("mongodb+srv://karoon01:W3h9kFwHyeIzOlgB@projectdb.wyfz9nv.mongodb.net/?retryWrites=true&w=majority");

        app.listen(PORT, () => {
            console.log(`Server has been started at port: ${PORT}`);
        });
    } catch(e) {
        console.log(`Cannot start a server: ${e.message}`);
        process.exit(1);
    }
};

start();

