const dbConnection=require('./mongodb');
const mobiles=require("./mobiles");
const insertData =async()=>{
    let db=await dbConnection();
  

    const result = await db.insertMany(mobiles); 
       if(result.acknowledged){
        console.log("Data inserted successfully")
    }else{
        console.log("Something went wrong while inserting data")

    } 
}

insertData();