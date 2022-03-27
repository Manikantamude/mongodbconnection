const express =require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const bodyParser=require("body-parser")
const app=express()
const port=process.env.PORT||5000
const Students=require("./contentschema")

mongoose.connect("mongodb+srv://ManiMude:mani1803@cluster0.nvi8l.mongodb.net/manidb")

app.use(bodyParser.urlencoded({
    extended:true
}))

app.use(bodyParser.json())

app.use(cors())

app.get("/",(req,res)=>{
    res.send("it is working")
})

app.get("/getStudents",(req,res)=>{
    Students.find()
    .then(result=>res.json(result))
})

app.post("/addStudents",(req,res)=>{
    const {name,age,address}=req.body
    const newStudent=new Students({
        name,age,address
    })
    newStudent.save();
    res.send("data added successfully")
})

app.listen(port,()=>`port is running ${port}`)