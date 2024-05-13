const express=require("express");
const app=express();
const router=require("./router/auth-router")
const contanct=require("./router/contanct-router");
app.use(express.json());
app.use("/",router);
app.use("/",contanct);

const connectDb=require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");

// app.get("/",(req,res)=>{
//    res.status(200).send({message:"Welcome to the API"}); 
// })
// app.get("/register",(req,res)=>{
//     res.status(200).send({message:"Do your Registration:"}); 
//  })

//  app.get("/login",(req,res)=>{
//     res.status(200).send({message:"Login page:"}); 
//  })

//  app.get("/services",(req,res)=>{
//     res.status(200).send({message:"Services page:"}); 
//  })
const port=5000;
app.use(errorMiddleware);
connectDb().then(()=>{
app.listen(port,()=>{
    console.log(`app is running at ${port}`);
})})