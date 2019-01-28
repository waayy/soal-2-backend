var express = require('express')
var app = express()
var router = require('./route/dataCPU')
var cors = require('cors')
app.use(router)
app.use(cors())

app.get('/', () => {
    console.log('konek')
})
app.listen(1111,()=>{
    console.log('server jalan')
})