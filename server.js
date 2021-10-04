const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/api.js');

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

app.use(router);

app.listen(PORT, () => {
    console.log(`\n Initialisation successful. Site now live: Port ${PORT}`)
})