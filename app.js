

const express = require('express');
require('dotenv').config()
const app = new express();
const router = require('./src/route/api')
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

// security Middleware ===================
   const rateLimit = require('express-rate-limit');
   const helmet = require('helmet');
   const mongoSanitize =  require('express-mongo-sanitize');
   const xss = require("xss-clean");
   const cors = require("cors")
   const hpp = require('hpp');

//    security middleware implement ==============
app.use(cors());
app.use(helmet());
app.use(mongoSanitize());
app.use(hpp())
app.use(xss());

// request rate limiting===========================
const limiter = rateLimit({
    windowMs : 15* 60 * 1000,
    max : 100
})

app.use(limiter)


// mongoose connect =======================

const { MongoClient } = require("mongodb");

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);
async function run() {
  try {
    await client.connect();

 /*    const database = client.db("CraftShop");
    const brand = database.collection("brands");
    await brand.insertMany([
      {
        name: "Apple_555",
        city: "Dhaka",
        country: "Thailand",
      },
      {
        name: "Apple_666",
        city: "Dhaka",
        country: "Thailand",
      },
    ]);

   const findBrand = await brand.findOne({ name: "Apple" });
    console.log(findBrand);  */

    console.log("connection Successfully");
  } finally {
    await client.close();
  }
}
run().catch(console.dir);


// router =========================

app.use("/api/v1", router);


// undefined route ===============

app.use('*',(req, res) => {
    res.status(404).json({
        status: "!!Not Found"
    });
});

module.exports = app;







