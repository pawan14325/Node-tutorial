const express = require("express");
const connectDB = require("./mongodb");
const app = express();

const main = async (search) => {
    console.log("MAIN FUNC CALLED");
    let data = await connectDB();
    // If 'search' is provided, use it to filter; otherwise, return all documents
    return await data.find(search ? { name: search } : {}).toArray();
};
app.use(express.json())
app.get('/', async (req, res) => {
    try {

        const search = req.query.search;
        const data = await main(search);
        console.log(data);
        res.send(data);
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).send("Error fetching data");
    }
});

app.post('/',async (req,res)=>{
    let db=await connectDB();
    let result=db.insertOne(req.body);
        console.log("Data inserted successfully");
        res.send(req.body);

    
})

app.put('/',async (req,res)=>{
let db=await connectDB();
let result=await db.updateOne({name:req.body.name},{$set:{price:req.body.price}})
res.send(result);
})
app.delete('/',async(req,res)=>{
    let db=await connectDB();
    let result=await db.deleteOne({name:req.body.name})
    res.send(result);
})
app.listen(9000, () => {
    console.log("Server is running on port 9000");
});
