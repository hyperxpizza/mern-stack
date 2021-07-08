const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config()

const app = express();
app.use(express.json());
app.use(cors());
const SERVER_PORT = process.env.SERVER_PORT;
const DATABASE_PORT = process.env.DATABASE_PORT;
//console.log("Variables loaded from the .env file:");
//console.log(`SERVER_PORT: ${SERVER_PORT}`);
//console.log(`DATABASE_PORT: ${DATABASE_PORT}`);
mongoose.connect(`mongodb://root:password@localhost:${DATABASE_PORT}/admin?authSource=admin&readPreference=primary&gssapiServiceName=mongodb&appname=MongoDB%20Compass&ssl=false`, 
{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify:true })
.then(() => {
    console.log(`[+] Connected to the database on port ${DATABASE_PORT}!`);
})
.catch(err => {
    console.log(err);
    return;
})

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
app.use('/api', require('./router/routes.js'))

app.listen(SERVER_PORT, () => {
    console.log(`Server running on port :${SERVER_PORT}`);
});
