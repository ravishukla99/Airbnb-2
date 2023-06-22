const mongoose = require('mongoose')
// mpongoose compase
mongoose.connect("mongodb+srv://ravi1:ravi123@mongodblearn.yzso6tx.mongodb.net/?retryWrites=true&w=majority",{
// mongoose.connect("mongodb://localhost:27017/AirbnbRegistation",{
	useNewUrlParser:true,
	useUnifiedTopology:true
	
}).then((e)=>{
	console.log('connection successful')
}).catch((e)=>{
	console.log("no connection")
})


