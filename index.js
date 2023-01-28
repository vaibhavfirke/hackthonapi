const express=require("express");
const { connection } = require("./config/connectDB");
const cors=require("cors");
const {userRouter} = require("./routes/user.router")

const app=express();

app.use(cors({
    origin:"*"
}));

app.use(express.json({limit: '2mb'}));
app.use(express.urlencoded({limit: '50mb'}));
app.get("/",(req,res)=>{
    try{
res.send("Home page of api use end points")
    }catch(err){
        res.send(err);

    }
})
app.use("/users",userRouter)




app.listen(5001,async()=>{
try{
    await connection;
    console.log("Databse connected")

}catch(err){
console.log("somthing went wrong");
console.log(err)
}
console.log(`server is running on port ${5001}`)
})