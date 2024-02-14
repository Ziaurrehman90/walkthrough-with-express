const http=require("http");
// simple creation of the server 
const server=http.createServer((req,res)=>{

//    home page 
// about page 
// contact page 
// product page 
// rest->error

if(req.url='/'){
    res.statusCode=200;
    // setheader: it tells the content that we have passed to the server 
    res.setHeader('content-type','text/plain')
    res.end("Welcome to the server by the Ziaurrehman");


}
else if(req.url="/about"){
    res.statusCode=200;
    // setheader: it tells the content that we have passed to the server 
    res.setHeader('content-type','text/plain')
    res.end("About page ");

    

}
else if(req.url="/contact"){
    res.statusCode=200;
    // setheader: it tells the content that we have passed to the server 
    res.setHeader('content-type','text/plain')
    res.end("contact page ");


}
else if(req.url="/product"){
    res.statusCode=200;
    // setheader: it tells the content that we have passed to the server 
    res.setHeader('content-type','application/json')
    res.end(JSON.stringify({productName:"product 1 "}));


}
else{
    res.statusCode=500;
    // setheader: it tells the content that we have passed to the server 
    res.setHeader('content-type','text/plain')
    res.end("Errror");


}














    // status code : it tells whether the response has ben given or not if successful it has value of 2XX else it would be 5XX
    res.statusCode=200;
    // setheader: it tells the content that we have passed to the server 
    res.setHeader('content-type','text/plain')
    res.end("Node server is created by Ziaurrehman");
})

const port=3025;
const hostName="Localhost";
server.listen(port,()=>{
    console.log(`server running at ${hostName}:${port}`);
})