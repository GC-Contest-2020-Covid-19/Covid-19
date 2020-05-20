const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");
const HelpObject = require("../models/helpModel");

// charity
const CHARITY_ID = process.env.CHARITY_ID;
const CHARITY_KEY = process.env.CHARITY_KEY;

router.get("/charity/:city/:amount", async (req, res) => {
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
});

// donations
router.get("/don/get", async (req, res) => {
    try {
        const donations = await HelpObject.find();
        res.json({ success: true, data: donations });
    } catch {
        res.json({ success: false, message: err });
    }
});

router.post("/don/add", (req, res) => {
    const donation = new HelpObject({
        donator: req.body.donator,
        donation: req.body.donation,
        location: req.body.location,
        contact: req.body.contact,
    });

    donation
        .save()
        .then((data) => {
            res.json({ success: true, data: data });
        })
        .catch((err) => {
            console.log(err);
            res.json({ success: false, message: err });
        });
});

module.exports = router;
