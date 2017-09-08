var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var VehicleSchema=new Schema({
	model: String
});

//var Vehicle=mongoose.model('Vehicle',VehicleSchema);

module.export=mongoose.model('Vehicle',VehicleSchema);