const connectDB=require('./mongodb');
const update=async()=>{
try{
    let  db=await connectDB();
    let result= await db.deleteMany({name:"S20",

    });
    console.log(result);
    if(result.acknowledged){
        console.log("Document updated");
    }else{
        console.log("Document not found");
    }
}catch(e){
    console.log(`ERROR WHILE UPDATE ${e.message}`);
}
}
update();