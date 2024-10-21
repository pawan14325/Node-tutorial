const express=require('express');
const students_data=require('./students_data')
const path=require('path');
const app = express();
 app.set('view engine','ejs');
// app.get('',(req,res)=>{
//     console.log(`USER NAME =>${req.query.name}`)
//     console.log(`USER PROFILE =>${req.query.profile}`)
//     const capitalizedName =req.query.name!=null? req.query.name.charAt(0).toUpperCase() + req.query.name.slice(1).toLowerCase():"";

//     res.send(`
//         <h1> Hye ${capitalizedName} , Welcome  to the home page</h1>
//         <a href=/devs>GO to the profile page</a>
//        `);
// });
// app.get('/devs',(req,res)=>{
//     res.send(students_data);
// })
// app.get('/login',(req,res)=>{
//  res.send('Welcome to the login page');
// });
// app.listen(9000,()=>{
//     console.log("Server is running on port 9000");
 
// });



///How to render html files 
  
let filePath=path.join(__dirname,'screens');
console.log(filePath)

// app.use(express.static(filePath));
// app.listen(9000,()=>{
//     console.log("Server is running on port 9000");
 
// });

app.get('',(req,res)=>{
    res.sendFile(`${filePath}/index.html`)
})
app.get('/home',(req,res)=>{
    res.sendFile(`${filePath}/home.html`)
})


app.get('/login',(req,res)=>{
    res.render(`login`)
})

app.get('/profile',(req,res)=>{
  
    res.render('profile',{students_data});
})
app.get('*',(req,res)=>{
    res.sendFile(`${filePath}/page_not_found.html`)
})
app.listen(9000)