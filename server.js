const express = require('express')
const scraper = require('./scraper.js')
const Geocoder = require('node-geocoder')
const keys = require('./credentials')

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

// foodBanks
app.get('/api/foodbanks/:city', asyncMiddleware(async (req, res) =>{
    
    const data = await scraper.scrapeFoodBanks(req.params.city)
    if (data[0].length > 0){
        res.json({'success': 'true', 'names': data[0], 'addresses': data[1], 'phones': data[2]});
    }else{
        res.json({'success': 'false'});
    }
    
}))

// Geocoding

const options = {
    provider: 'opencage',
    apiKey: keys.OPENCAGE_KEY
}

const geocoder = Geocoder(options)

app.get('/api/geocoding/:address', asyncMiddleware(async (req, res) => {
    geocoder.geocode({
        address: decodeURIComponent(req.params.address),
        country: 'United States of America'
    })
        .then(data => {
            if (data.length < 1){
                throw new Error('Could not fetch location data.');
            }
            res.json({'success': true, 'data': data})
        })
        .catch((error) => {
            console.log('ERROR: ', error, 'REQUESTED: ', req.params.address)
            res.json({'success': false})
        })
}))

app.get('/api/geocoding_reverse/:lat/:lng', asyncMiddleware(async (req, res) => {
    const data = await geocoder.reverse({ lat: req.params.lat , lon: req.params.lng })
    res.json(data)
}))



// start server
const port = 5000
app.listen(port, () => console.log(`Express on port ${port}`))