module.exports=requestFilter=(req,res,next)=>{

    console.log("REQUEST FILTER")
    if (req.query.age == null) {
        res.send("Age parameter is required");
        return;
    }
    else if (req.query.age < 18) {
        res.send("You are not eligible for this");  
    } else {
        next();
    }
}