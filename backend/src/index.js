const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');


const app = express();

mongoose.connect('mongodb+srv://carloshenrique:teste@cluster0-gdyfi.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

app.use(express.json());
app.use(routes);


app.listen(3333);