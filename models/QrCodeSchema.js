var mongoose = require('mongoose');

var schema = mongoose.Schema,
    
    QrCodeSchema = new schema({
        id: {type:Number, required:true},
        qrCode: Number,
        injuredId: Number;
    }, {collection: 'QrCode'});

var QrCode = mongoose.model('QrCode', QrCodeSchema);

module.exports = QrCode;