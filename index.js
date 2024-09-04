
const express =require("express")
const router=require("./router/individualRouter.js")
//const npoRouter=require("./router/npoRouter")
const cors=require("cors")


const env=require("dotenv").config()
const db=require("./Config/dbConfig.js")
const app=express()

const PORT=process.env.PORT
    
app.use(express.json())
router.use(express.urlencoded({ extended: true }));
app.use(cors({origin:"*"}))
app.use("/api/v1/user",router) 
//app.use("/api/v1/npo",npoRouter)


app.listen(PORT,(req,res)=>{
    console.log(`server is connected to port ${PORT}`)
})
