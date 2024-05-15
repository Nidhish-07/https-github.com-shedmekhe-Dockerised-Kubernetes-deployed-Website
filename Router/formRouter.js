const express =require('express');
const bodyParser=require('body-parser');
const formRouter= express.Router();
const path=require('path');
const home_path=path.join(__dirname,'views/HomePage')
const app=express();
app.use(express.static(path.join(__dirname,'./public/')))
app.set("view engine","hbs")
app.set("views",home_path);
// formRouter.use(bodyParser.json());

formRouter.route('/')
.get((req,res)=>{
    res.render("form"); 
})