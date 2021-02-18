const express = require('express');
const path = require('path');
const { start } = require('repl');
const port = process.env.PORT || 8000;
const app = express();

const static_path = path.join(__dirname,"../public");
app.use(express.static(static_path));

app.get("",(req,res)=>{
    res.send("Welcome")

}); 

app.get("/about",(req,res)=>{
    res.send("Welcome to about")

}); 

app.get("/weather",(req,res)=>{
    res.send("Welcome to weather")

}); 
app.get("*",(req,res)=>{
    res.send("Oops page not find")

}); 


app.listen(port,()=>{
    console.log('Listening to the port at ${port}')
})

