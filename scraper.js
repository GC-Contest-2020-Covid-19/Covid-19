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
			{ waitUntil: "load", timeout: 0 }
		);
		const myths = await page.evaluate(() => {
			return Array.from(
				document.querySelectorAll(
					"#PageContent_C003_Col01 div.sf-content-block.content-block div"
				)
			)
				.map((div) => ({
					title: div.querySelector("h2").textContent.trim(),
					paragraph: div.querySelector("p").textContent.trim(),
				}))
				.filter((myth) => myth.title && myth.paragraph);
		});

		browser.close();
		return myths;
	},
	scrapeCoursera: async function (query) {
		const browser = await puppeteer.launch();

		const page = await browser.newPage();
		await page.setUserAgent(
			"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36"
		);
		//setting timeout to 0 ensures that there is no network timeout in case of slow network connections
		await page.goto(`https://www.coursera.org/search?query=${query}`, {
			waitUntil: "load",
			timeout: 0,
		});

		// get data
		const selector = [
			".partner-name",
			".card-title",
			".ratings-text",
			".enrollment-number",
			".difficulty",
		];
		let data = [];
		for (let i = 0; i < selector.length; i++) {
			data.push(
				await page.evaluate(
					function (selector, i) {
						const listItems = Array.from(
							document.querySelectorAll(selector[i])
						);
						return listItems.map((li) => li.innerHTML);
					},
					selector,
					i
				)
			);
		}
		data.push(
			await page.evaluate(function () {
				const listItems = Array.from(
					document.querySelectorAll(".rc-MobileSearchCard")
				);
				return listItems.map((li) => li.getAttribute("href"));
			})
		);

		// filter partner
		data[0] = filterCoursera(data[0]);

		return data;
	},
};

function extractContent(s) {
	return s.replace(/<[^>]+>/g, "");
}

function filterCoursera(array) {
	let rv = [];
	for (let i = 0; i < array.length; i++) {
		if (array[i][0] !== "<") {
			rv.push(array[i]);
		}
	}
	return rv;
}
