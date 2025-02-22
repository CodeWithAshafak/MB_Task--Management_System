const express=require("express")
const app=express()
const mongoose=require("mongoose");
const bodyParser=require("body-parser")
const cors=require("cors")
require("dotenv").config()

const port=process.env.PORT;
const dbcon=process.env.DBCON;

const AdminRoute=require("./Routes/AdminRoute")
const EmpRoute=require("./Routes/EmpRoute")

mongoose.connect(dbcon).then((res)=>{
    console.log("DB Connected")
})

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use("/admin",AdminRoute)
app.use("/employee", EmpRoute)

app.listen(port, ()=>{
    console.log(`Server Run On  ${port}`)
})