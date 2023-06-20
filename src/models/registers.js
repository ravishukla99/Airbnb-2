const mongoose =require("mongoose");
const bcrypt = require('bcryptjs')
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

	
})
//    for password securty used bcrypt
registationSchema.pre("save",async function(next){
	if(this.isModified("password")){
       
		console.log(`the current password is ${this.password}`)
		 this.password = await bcrypt.hash(this.password, 10);
		console.log(`the current password is ${this.password}`)
		this.confirmpassword = undefined;
	}
	next()
})

// now we need to create a collection

const Register = new mongoose.model("RegisterData", registationSchema);
module.exports=Register