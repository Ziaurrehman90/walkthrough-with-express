const { error } = require("console");
const http=require("http");
// server to server communication - make request 

// lets make the options
const options={
 hostname:'fakestoreapi.com',
 path:'/products/1',
 method:'GET'

}
const apiReq=http.request(options,(apiResponse)=>{
  apiResponse.on("data",(data)=>{
    console.log(data.toString());
  })

});
apiReq.on("error",()=>{
    console.log(error);
})
apiReq.end();
