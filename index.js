
// const fs=require('fs');
// const app = require("./app");
// const colors=require('colors');
// console.log(app.b);
// console.log("hello")
// let  a="p";
// console.log("a".red)

// ///FILTER IN ARRAY => filter return new list of given conditions
//  var arr=[1,2,33,3,"3",2,1,];

//  let x= arr.filter((v)=>{
//    return v===3;
// })
// console.log(x);


///MODULE
//Global module -> whose are not import
//Non global module-> Those require import files
//EXAMPLES->
//Global -> console.log,
//Non global module-> file system(fs)
// var f= fs.writeFileSync("file_sys.text","THIS IS INDEX2 ");
// console.log(f)
// console.log("PAwan".green)
// const PORT=4000;
// const http=require('http');
// const studentsData=require('./students_data')
// http.createServer((req,res)=>{
// res.writeHead(200,{"content-type":"application/json"});

// res.write(JSON.stringify(studentsData)); 
// res.end();
// }).listen(PORT);

//CRUD WITH FILE SYSTEM
//1- writeFileSync->Create file
//2- readFile ->Read file
//3- appendFile -> append data with previouse one
///4-> rename -> remane the current file  name 
///5 ->unlinkSync->Delete the file

///BUFFER -> Temparory storage which store and munipulate the binary data in node js
const fs = require('fs');
const path = require('path');
const dircPath = path.join(__dirname, 'crud');
const filePath = `${dircPath}/apple.txt`;

//  fs.writeFileSync(filePath,"This is my file");
// fs.readFile(filePath,(e,data)=>{
//     console.log(`DATA => ${data}`);
// });

// fs.appendFile(filePath," Here is a appended data",(er)=>{
//     if(!er)console.log("Filed appended");
//     else console.log(`ERROR IN APEND FILE -> ${er}`);
// });

// fs.rename(filePath,`${dircPath}/apple.txt`,(err)=>{
//   err!=null?  console.log(`ERROR IN RENAME FILE -> ${err}`):null;
// });

// fs.unlinkSync(filePath);

//ASYNC SYNC -node js ,dart,js,java
//SYNC-> Run tasks one by one -php
//ASYNC-> Run run second tasks if first one took time to execute 
// SYNC EXAMPLE -> USERS->PRODUCTS->CITIES //run one by one
//ASYNC EXAMPLE -> USERS took 2min,PRODUCTS took 3min,CITIES took 4min -> async do not wait for any tasks to execute 


///ASYNC EXAMPLE
// console.log("START EXECUTING");
// setTimeout(() => {
//     console.log("EXECUTING");
// }, 2000);
// console.log('EXECUTING DONE');


a=10;
b=0;

const waitingData=new Promise((success,failure)=>{
    setTimeout(()=>{
        success(90);
    },2000);
});
waitingData.then((value)=>{
    console.log(`DATA ${a+value}`);
});
console.log(a+b);