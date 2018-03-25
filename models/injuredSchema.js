var mongoose = require('mongoose');

var schema = mongoose.Schema,


    injuredSchema = new schema({
        id: {type:Number, required:true},
        // QrId: { type: schema.Types.ObjectId, ref: 'QrCode' },
        // eventId:  { type: schema.Types.ObjectId, ref: 'Events' },
        // name:String,
        // Location: Number,
        // addBy: { type: schema.Types.ObjectId, ref: 'User' },
        // ModifyBy: { type: schema.Types.ObjectId, ref: 'User' },
        airWay: Boolean
        // Breathing: Boolean,
        // Circulation: Number,
        // Disability: String,
        // Evacuation: String,
        // ToHospital: String,
        // TandT: Boolean,
        // date: Date,
        // time: { type : Date, default: Date.now },
        // severity: String
    }, {collection: 'Injured'});

var Injured = mongoose.model('Injured', injuredSchema);

module.exports = Injured;