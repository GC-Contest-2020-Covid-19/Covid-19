const express = require("express");
const scraper = require("./scraper.js");
const Geocoder = require("node-geocoder");
const fetch = require("node-fetch");
require('dotenv').config()

const app = express();

// allow async requests
const asyncMiddleware = (fn) => (req, res, next) => {
	Promise.resolve(fn(req, res, next)).catch(next);
};

// allow cors
app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header(
		'Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept'
	);
	next();
});

/* Routes */

// foodBanks
app.get(
	"/api/foodbanks/:city",
	asyncMiddleware(async (req, res) => {
		const data = await scraper.scrapeFoodBanks(req.params.city);
		if (data[0].length > 0) {
			res.json({
				success: "true",
				names: data[0],
				addresses: data[1],
				phones: data[2],
			});
		} else {
			res.json({ success: false });
		}
	})
);

// Geocoding
const options = {
	provider: "opencage",
	apiKey: process.env.OPENCAGE_KEY,
};

const geocoder = Geocoder(options);

app.get(
	"/api/geocoding/:address",
	asyncMiddleware(async (req, res) => {
		geocoder
			.geocode({
				address: decodeURIComponent(req.params.address),
				country: "United States of America",
			})
			.then((data) => {
				if (data.length < 1) {
					throw new Error("Could not fetch location data.");
				}
				res.json({ success: true, data: data });
			})
			.catch((error) => {
				console.log(error);
				res.json({ success: false });
			});
	})
);

app.get(
	"/api/geocoding_reverse/:lat/:lng",
	asyncMiddleware(async (req, res) => {
		const data = await geocoder.reverse({
			lat: req.params.lat,
			lon: req.params.lng,
		});
		res.json(data);
	})
);

// charity
const CHARITY_ID = process.env.CHARITY_ID;
const CHARITY_KEY = process.env.CHARITY_KEY;

app.get(
	"/api/charity/:city/:amount",
	asyncMiddleware(async (req, res) => {
		fetch(
			`https://api.data.charitynavigator.org/v2/Organizations?app_id=${CHARITY_ID}&app_key=${CHARITY_KEY}&pageSize=${req.params.amount}&city=${req.params.city}&sort=RATING:DESC&categoryID=5`
		)
			.then((response) => {
				if (!response.ok) {
					throw new Error("Network response was not ok");
				}
				return response;
			})
			.then((response) => response.json())
			.then((json) => {
				res.json({ success: true, data: json });
			})
			.catch((error) => {
				console.log(error);
				res.json({ success: false });
			});
	})
);

//myths
app.get(
	"/api/myths",
	asyncMiddleware(async (req, res, next) => {
		try {
			const myths = await scraper.scrapeMyths();
			res.status(200).json(myths);
		} catch (error) {
			res.status(500).json({ error: error.message });
		}
		next();
	})
);

// Coursera
app.get(
	"/api/coursera/:query",
	asyncMiddleware(async (req, res) => {
		const data = await scraper.scrapeCoursera(req.params.query);
		if (data[0].length > 0) {
			res.json({
				success: "true",
				universities: data[0],
				titles: data[1],
				ratings: data[2],
				enrollement: data[3],
				difficulties: data[4],
				links: data[5],
			});
		} else {
			res.json({ success: false });
		}
	})
);

// start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Express on port ${PORT}`));
