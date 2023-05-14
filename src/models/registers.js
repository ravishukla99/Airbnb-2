const mongoose =require("mongoose");
const homesSchema = new mongoose.Schema({
	name : {
		type:String
	},
	homepic : {
		type:String
	},
	price : {
     type : Number
	}
})
const registationSchema = new mongoose.Schema({
	fname : {
		type:String,
		required:true
	},
	lname:{
		type:String,
		required:true
	},
	email:{
		type:String,
		required:true,
		unique:true
	},
    password:{
		type:String,
		required:true
	},
	confirmpassword:{
		type:String,
		required:true
	},

	isAdmin:{
		type:Boolean
	},
	homes:[homesSchema]
})

// now we need to create a collection

const Register = new mongoose.model("RegisterData", registationSchema);
module.exports=Register