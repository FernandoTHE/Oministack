const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes');

const app = express();
//Con
mongoose.connect('mongodb+srv://Fernando:Fernando@cluster0-i4axp.mongodb.net/test?retryWrites=true&w=majority',{
useNewUrlParser: true,
useUnifiedTopology: true,
});

app.use(express.json());
app.use(routes);


app.listen(3333);
