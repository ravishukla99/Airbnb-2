const mongoose = require('mongoose')
// mpongoose compase
mongoose.connect("mongodb://localhost:27017/AirbnbRegistation",{
	useNewUrlParser:true,
	useUnifiedTopology:true
	
}).then((e)=>{
	console.log('connection successful')
}).catch((e)=>{
	console.log("no connection")
})

