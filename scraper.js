const puppeteer = require("puppeteer");

module.exports = {
	scrapeFoodBanks: async function scrapeFoodBanks(city) {
		// launch browser
		const browser = await puppeteer.launch();

		// open website
		const page = await browser.newPage();
		await page.goto(`https://www.foodbanks.net/search.php?q=${city}`);

		// get data from table
		const data = await page.evaluate(() => {
			const tds = Array.from(document.querySelectorAll("table tr td"));
			return tds.map((td) => td.innerHTML);
		});

		// filter data
		let names = [];
		let adresses = [];
		let phones = [];
		for (let i = 0; i < data.length; i++) {
			if (data[i].includes("name")) {
				names.push(extractContent(data[i]));
			} else if (data[i].includes("address")) {
				adresses.push(extractContent(data[i]));
			} else if (
				!isNaN(
					data[i]
						.replace("(", "")
						.replace(")", "")
						.replace(" ", "")
						.replace("-", "")
				)
			) {
				phones.push(data[i]);
			}
		}
		browser.close();

		return [names, adresses, phones];
	},
	scrapeMyths: async function () {
		const browser = await puppeteer.launch();

		const page = await browser.newPage();
		await page.goto(
			"https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public/myth-busters",
			{ waitUntil: "networkidle2" }
		);
		const myths = await page.evaluate(() => {
			return Array.from(
				document.querySelectorAll(
					"#PageContent_C003_Col01 div.sf-content-block.content-block div"
				)
			).map((div) => ({
				title: div.querySelector("h2").textContent.trim(),
				paragraph: div.querySelector("p").textContent.trim(),
			}));
		});

		browser.close();
		return myths;
	},
};

function extractContent(s) {
	return s.replace(/<[^>]+>/g, "");
}
