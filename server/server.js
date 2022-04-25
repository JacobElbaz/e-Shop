const bodyParser = require('body-parser');
const express = require('express');
require('dotenv').config({path:'./config/.env'});
require('./config/db');
require('./routes/client.routes')
const app = express();
const clientRoutes = require("./routes/client.routes");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//routes
app.use("/api/client", clientRoutes);

//server
app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`)
})