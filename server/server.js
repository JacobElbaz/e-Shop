const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const express = require('express');
require('dotenv').config({path:'./config/.env'});
require('./config/db');
const {checkClient, requireAuth} = require('./middleware/auth.middleware');
require('./routes/client.routes')
const app = express();
const clientRoutes = require("./routes/client.routes");
const productRoutes = require('./routes/product.routes');
const orderRoutes = require('./routes/order.routes');

const corsOptions = {
    origin: process.env.CLIENT_URL,
    credentials: true,
    'allowedHeaders': ['sessionId', 'Content-Type'],
    'exposedHeaders': ['sessionId'],
    'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
    'preflightContinue': true
  }
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());

//jwt
app.get('*', checkClient);
app.get('/jwtid', requireAuth, (req, res) =>{
    res.status(200).send(res.locals.client._id)
});

//routes
app.use("/api/client", clientRoutes);
app.use('/api/product', productRoutes);
app.use('/api/order', orderRoutes);
//server
app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`)
})