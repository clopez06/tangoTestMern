var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var mongodb = 'mongodb://admin:admin@ds139360.mlab.com:39360/tangotest';

var connection=mongoose.connect('mongodb://admin:admin@ds139360.mlab.com:39360/tangotest');

mongoose.Promise=global.Promise;

var Schema=mongoose.Schema;

var VehicleSchema=new Schema({  
  _model: String,
  _year:String,
  _price:String,
  _mileage:String,
  _itemnumber:String,
  _vin:String,
  _cylinders:String,
  _city: String,
  _highway: String,
  _engine: String
});

var VehicleModel=connection.model('Vehicle',VehicleSchema);

/*var getAllVehicleModel=function(callback){
  VehicleModel.find(function(err,results){
    callback(results);
  });
};

console.log(getAllVehicleModel);
*/

router.get('/', function(req, res) {
  // Comment out this line:
  //res.send('respond with a resource');

  // And insert something like this instead:
  VehicleModel.find((function(err,results){
    res.send(results)}
    ));
});

/*router.post('/post', function(req, res) {
  // Comment out this line:
  //res.send('respond with a resource');

  // And insert something like this instead:
  console.log(req.body);
  VehicleModel.create(req.body).then(function(vehicle){
    res.send(vehicle);
  }) ;
});*/


module.exports = router;
