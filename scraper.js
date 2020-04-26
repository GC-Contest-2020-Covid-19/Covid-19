const puppeteer = require('puppeteer')

module.exports = {
    scrapeFoodBanks: async function scrapeFoodBanks(city){
        // launch browser
        const browser = await puppeteer.launch()
        
        // open website
        const page = await browser.newPage()
        console.log('URL: ', `https://www.foodbanks.net/search.php?q=${city}`)
        await page.goto(`https://www.foodbanks.net/search.php?q=${city}`)
    
        // get data from table
        const data = await page.evaluate(() => {
            const tds = Array.from(document.querySelectorAll('table tr td'))
            return tds.map(td => td.innerHTML)
          });
    
        // filter data
        let names = []
        let adresses = []
        let phones = []
        for (let i = 0; i < data.length; i++){
            if (data[i].includes('name')){
                names.push(extractContent(data[i]))
            }else if(data[i].includes('address')){
                adresses.push(extractContent(data[i]))
            }else if(!isNaN(data[i].replace('(', '').replace(')', '').replace(' ', '').replace('-', ''))){
                phones.push(data[i])
            }
        }
        browser.close()
        
        return [names, adresses, phones]
    }
}

function extractContent(s) {
    return s.replace(/<[^>]+>/g, '')
};