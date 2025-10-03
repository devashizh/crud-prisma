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

app.post("/api/post",async (req,res)=>{
    const {title,content} = req.body;

    //do validation
    const post = await prisma.post.create({
        data:{
            title,
            content,
            authorId:1 //todo: get this from auth context
        }
    })
    return res.json(post)
})

app.get("/api/post",async (req,res)=>{
    //do validation
    const post = await prisma.post.findMany({
       
    })
    return res.json(post)
})




app.listen(4600, ()=>{
    console.log(`Serving on port: 4600`);
    
})