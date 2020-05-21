const express = require("express");
const router = express.Router();
const scraper = require("../scraper.js");

router.get("/coursera/:query", async (req, res) => {
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
});

router.get("/edx/:query", async (req, res) => {
    const data = await scraper.scrapeEDX(req.params.query);
    if (data[0].length > 0) {
        res.json({
            success: "true",
            universities: data[0],
            titles: data[1],
            links: data[2],
        });
    } else {
        res.json({ success: false });
    }
});

module.exports = router;
