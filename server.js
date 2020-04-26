const express = require('express')
const scraper = require('./scraper.js')

const app = express()

// allow async requests
const asyncMiddleware = fn => (req, res, next) => {
    Promise.resolve(fn(req, res, next))
        .catch(next)
}

// allow cors
app.use(function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept')
    next()
})

/* Routes */
app.get('/api/foodbanks/:city', asyncMiddleware(async (req, res) =>{
    
    const data = await scraper.scrapeFoodBanks(req.params.city)
    console.log(data)
    if (data[0].length > 0){
        res.json({'success': 'true', 'names': data[0], 'addresses': data[1], 'phones': data[2]});
    }else{
        res.json({'success': 'false'});
    }
    
}))

// start server
const port = 5000
app.listen(port, () => console.log(`Express on port ${port}`))