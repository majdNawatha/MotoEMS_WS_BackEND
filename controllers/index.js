'use strict';
const   mongoose = require('mongoose'),
        Injured   = require('./../models/injuredSchema'),
        EMSevent   = require('./../models/eventSchema'),
        Increment = require('./../models/increment');
class Event {


    getIncrements() {
        return new Promise((resolve, reject) => {
            Increment.findOne((err, result) => {
                if (err) console.log(err); 
                else resolve(result);
            })
        })
    }


    addNewInjured(injuredDetails) {
        var headers = injuredDetails;
        return new Promise((resolve, reject) => {
            let newInjured = new Injured({
                id: headers.id,
                airWay: headers.airWay
            });
            newInjured.save(
                (err) => {
                    if (err) resolve("ERROR in injured insertion, ",err);
                    else resolve(`Entered as SourceID ${injured.id} the following documenet: ${injured.airWay}`);
                });
            });
        };

    getInjuredById(id) {
        return new Promise((resolve, reject) => {
            Injured.findOne({id: id},
                (err, result) => {
                    if (err) reject (err);
                    else resolve (result);
                });
        });
    };

    getEventById(id) {
        return new Promise((resolve, reject) => {
            EMSevent.findOne({id: id},
                (err, result) => {
                    if (err) reject (err);
                    else resolve (result);
                });
        });
    };


    getInjuredsByPriority(severity) {
        return new Promise((resolve, reject) => {
            Injured.find({severity: severity},
                (err, result) => {
                    if (err) reject (err);
                    else resolve (result);
                });
        });
    };

}
module.exports = () => {
    var event = new Event();
    return event;
}