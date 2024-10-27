const express = require('express');
const requestFilter =require('./middleware');
const route=express.Router();
app = express();

route.use(requestFilter);
app.get("/", (req, res) => {
    res.send("Welcome to the home page");
});
route.get("/profile", (req, res) => {
    res.send('Welcome to the profile page');

});
app.get("*",(req,res)=>{
res.send("Page not found");
});
app.use('/',route);
app.listen(5000);  