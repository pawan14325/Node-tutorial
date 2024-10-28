const {MongoClient}=require("mongodb");
const url="mongodb://localhost:27017";
const client=new MongoClient(url);


 async function connectDB(){
 let connection=await client.connect();
  db=connection.db('e-comm');
 return  db.collection('products');
 }

 module.exports=connectDB;