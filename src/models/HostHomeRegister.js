const mongoose = require("mongoose"); 
const homeHostSchema =new mongoose.Schema({
	Propertyname :{
		type:String,
        // required :true
	},
   
    Country : {
		type:String,
        // required :true
	},
	Price : {
		type:String,
        // required :true
	},

	Summery :{
		type:String,
        // required :true
	},
	Bedrooms : {
		type : Number,
		// required : true
	},
    Bed : {
		type : Number,
		// required : true
	},
	Bathrooms:{
		type:Number,
		// required :true
	},

    Image : {
		type:String,
		// required:true

	},
	Address :{
		type : String
		// required: true
	},
	Policy : {
		type:String
		// require:true
	},
	UserId :{
		type:mongoose.Schema.Types.ObjectId
	}
})

// create collection
const HostRagister = new mongoose.model("HostRagisterData",homeHostSchema);
module.exports = HostRagister
