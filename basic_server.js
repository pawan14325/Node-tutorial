const http=require('http');
let PORT=3000;

http.createServer((req,res)=>{
    res.write("<h1>THIS IS BASIC SERVER</h1>" );
l̥
res.end();

console.log("SERVER CREATED ")
}).listen(PORT,()=>{
    console.log(`SERVER RUNNING ON PORT ${PORT}`)
 
})
