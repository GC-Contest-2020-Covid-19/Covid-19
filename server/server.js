const express = require("express");
const mongoose = require('mongoose')
const mapRoutes = require('./routes/mapRoutes')
const helpRoutes = require('./routes/helpRoutes')
const infoRoutes = require('./routes/infoRoutes')
const courseRoutes = require('./routes/courseRoutes')
require("dotenv").config();


/* Setup */
const app = express();

// allow cors
app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods",  "DELETE, GET, POST")
	next();
});

// parse request body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("build"));

// connect to db
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0-4ennz.mongodb.net/test?retryWrites=true&w=majority`,
					{ useNewUrlParser: true, useUnifiedTopology: true  }, 
                    () => console.log('db connected'))


// start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Express on port ${PORT}`));


/* Routes */

app.use('/api/map', mapRoutes)

app.use('/api/help', helpRoutes)

app.use('/api/info', infoRoutes)

app.use('/api/courses', courseRoutes)


