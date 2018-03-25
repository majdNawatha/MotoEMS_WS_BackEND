var mongoose = require('mongoose');

var schema = mongoose.Schema,

    
    EventSchema = new schema({
        Id: {type:Number, required:true},
        description: String,
       // createBy: {type: Schema.Types.ObjectId, ref: 'User' },
        time: { type : Date, default: Date.now },
        location: Number
    }, {collection: 'Events'});

var EMSevent = mongoose.model('EMSevent', EventSchema);

module.exports = EMSevent;