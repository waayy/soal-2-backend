var mongoose = require ('mongoose');
var Schema = mongoose.Schema;


var dataSchema = new Schema({
    nama: String,
    tipe: String,
    platform: String,
    rilis: String,
    ramSisa: Number,
    ramTotal: Number
})

const data = mongoose.model('data', dataSchema);

module.exports= data;