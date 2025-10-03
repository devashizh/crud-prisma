import {prisma} from "./src/config/db.js"
import express from 'express'
const app = express();

app.use(express.json())

app.get("/",(req,res) =>{
    res.json({
        message:"Welcome!!!"
    })
})

app.post("/api/users",async (req,res)=>{
    const {name,email} = req.body;

    //todo: validation
  const user=  await prisma.user.create({
      data:{
        email,
        name
      }
    })
    return res.json(user)
})


app.listen(4600, ()=>{
    console.log(`Serving on port: 4600`);
    
})