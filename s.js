var express= require("express");
var app = express();

app.use("/",function(req,res){
	res.send("lalala")
})
app.listen(3000,function(){
	console.log("now you are listening at 3000 port")
})
