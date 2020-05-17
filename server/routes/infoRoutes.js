const express = require('express')
const router = express.Router()
const scraper = require("../scraper.js");




// myths
router.get(
	"/myths",
	async (req, res, next) => {
		try {
			const myths = await scraper.scrapeMyths();
			res.status(200).json(myths);
		} catch (error) {
			res.status(500).json({ error: error.message });
		}
		next();
	}
);


module.exports = router