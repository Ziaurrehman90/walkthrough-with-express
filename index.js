// taking the expresss dependencies
const express=require("express");
// generate an instance of express by initating an appp
const app=express();
const port=4551;
const hostNmae="localHost";

// sending the response through express
app.get('/',(req,res)=>{
   res.send("Hello World! welcome to the class of expressjs ");
})
// for about page 
app.get('/about',(req,res)=>{
    res.send("Its the about page ");
})
// for contact page 
app.get('/contact ',(req,res)=>{
    res.send("Its the contact page ");
})

app.listen(port,()=>{
    console.log(`server is running at ${hostNmae}:${port}`);
})