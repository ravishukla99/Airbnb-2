const express = require('express');
const app = express();
const port = process.env.PORT || 3200;
const multer = require('multer')
// mongoose connection
require('./db/conn');
const Register=require("./models/registers")
const HostRagister = require("./models/HostHomeRegister")
// form data
app.use(express.json());
app.use(express.urlencoded({extended:false}));
const path =require('path')
const hbs = require('hbs')
const template_path = path.join(__dirname,'../templates/views')  
const partials_path = path.join(__dirname,"../templates/partials")
app.set("view engine", "hbs")
app.set('views',template_path)
hbs.registerPartials(partials_path)
const static_path = path.join(__dirname, "./public" )
app.use(express.static(static_path));
app.get('/',(req,res)=>{
	res.render('index')
}) 
app.get('/admin',(req,res)=>{
	res.render('admin')
})
app.get("/dashbord",(req,res)=>{
	res.render('dashbord')
})

app.get('/host',(req,res)=>{
	res.render('host')
})
app.get('/index',(req,res)=>{
	res.render('index')
})
app.get('/homehost',(req,res)=>{
	res.render('homehost')
})

//   Registration data
app.post("/register", async(req,res)=>{
console.log(req.body)	
try{
	const password = req.body.password;
	const cpassword = req.body.confirmpassword;

	if(password === cpassword){
		const registationAirbnb = new Register({
			fname:req.body.fname,
			lname:req.body.lname,
			email:req.body.email,
			password : password,
			confirmpassword:cpassword
		});
		const registered = await registationAirbnb.save();
	console.log(registered)
		res.status(201).render("resdone")
	}else{
		res.send("password not matched")
	}
}catch (error){
	
	res.status(400).send (error)
}
})

app.post("/login",async(req,res)=>{
	try{
   const email = req.body.email;
   const Password= req.body.password
   const useremail = await Register.findOne({email:email});
  
     if(useremail.password===Password){
		res.status(201).render('login')
	 }else{
		res.send("password not matched")
	 }
	}catch(error){
		res.status(400).send("invalid email")

	}
})
//      Login Data
app.post("/adminLogin",async(req,res)=>{
	try{
const email = req.body.adminemail;
const password=req.body.adminpsw;
const adminemail = await Register.findOne({email:email});

   if(adminemail.password===password){
	res.status(201).render("dashbord")
   }else{
	res.send("password not match")
}
}catch(error){
		res.send(400).send('invalid email')

	}
})

//  HostHome Ragistration Data

app.post("/hosthome", async(req,res)=>{
	console.log(req.user)	
	try{
			const HostRegisterData = new HostRagister({
				Propertyname:req.body.propertyname,
				Country:req.body.country,
				Price:req.body.price,
				Summery:req.body.summery,
				Bedrooms:req.body.bedrooms,
				Bed:req.body. bed,
				Bathrooms:req.body.bathrooms,
				 Image:req.body.image,
				Address:req.body.address,
				Policy:req.body.policy
				
			});
			const registered = await HostRegisterData.save();
		console.log(registered)

		const hostdatafetch =await HostRagister.find({})
		console.log(hostdatafetch)


			res.status(201).render("index",{data:hostdatafetch})
	     }catch (error){
		
		res.status(400).send (error)
	}
	})







app.listen(port,()=>{
	console.log('server started')
})