const express=require("express") 

// Importing all the routes 
const homeroute=require("./home.js") 
const loginroute=require("./login") 

// Creating express server 
const app=express() 

// Handling routes request 
app.use("/home",homeroute) 
app.use("/login",loginroute) 
app.listen((4000),()=>{ 
	console.log("Server is Running") 
}) 


