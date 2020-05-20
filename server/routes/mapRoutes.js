const express = require("express");
const router = express.Router();
const Geocoder = require("node-geocoder");
const scraper = require("../scraper.js");
require("dotenv").config();

// foodBanks
router.get("/foodbanks/:city", async (req, res) => {
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
});

// Geocoding
const options = {
    provider: "opencage",
    apiKey: process.env.OPENCAGE_KEY,
};

const geocoder = Geocoder(options);

router.get("/geocoding/:address", async (req, res) => {
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
});

router.get("/geocoding_reverse/:lat/:lng", async (req, res) => {
    const data = await geocoder.reverse({
        lat: req.params.lat,
        lon: req.params.lng,
    });
    res.json(data);
});

module.exports = router;
