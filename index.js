const express=require("express");
const app=express();
const port=8080;
const path=require("path");
const { v4: uuidv4 } = require('uuid');
uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'


app.use(express.urlencoded({extended:true}));


app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));


 let posts=[
    {
        id:uuidv4(),
        username:"apna college",
        content:"i love coding",
    },
    {
        id:uuidv4(),
        username:"nafila",
        content:"hardwork is important to achieve sucess",
    },

    {
         id:uuidv4(),
        username:"rahul",
        content:"i got selected for my first internship",
    },
 
 ];



app.get("/posts", (req, res) => {
    res.render("index.ejs",{posts});
});



 



  

app.get("/posts/new",(req,res)=>{
    res.render("new.ejs");
});

app.post("/posts",(req,res)=>{
     let {username,content}=req.body;
     posts.push({username,content});
    console.log(req.body);
    res.redirect("/posts");
 });

 app.get("/posts/:id", (req, res) => {
    let {id}=req.params;
    console.log("id");
    let post=posts.find((p)=>id===p.id);
    console.log(post);

    res.render("show.ejs" ,{post});
});

app.listen(port,()=>{
    console.log("listening to the port:8080");
});