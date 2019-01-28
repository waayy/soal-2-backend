var router = require('express').Router()
var mongoose = require('mongoose');
var os = require('os')
var data = require('../model database/dataCPU')
var url = "mongodb://localhost:27017/dataCPU"


mongoose.connect(url, () => {
    console.log ("connect gak ya!")

})

router.get('/data', (req, res) => {
    data.find((eror, data) => {
        res.send(data)
    })
})


router.post('/data', (req, res) => {
    new data({
        namacpu: os.hostname(),
        tipe: os.type(),
        platform: os.platform(),
        rilis: os.release(),
        ramSisa: os.freemem(),
        ramTotal: os.totalmem()
    }).save().then((newdata)=>{
        res.send(newdata)
    })

})

module.exports = router