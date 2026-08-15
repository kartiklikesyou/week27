import express from "express"
import { prismaClient } from "db/client"

const app = express()
app.use(express.json())

app.get("/get", async (req, res) => {
  const user = await prismaClient.user.findMany()
  res.json({
    msg: user
  })
})

app.post("/post",async(req,res)=>{
    const user = await prismaClient.user.create({
        data:{
            username: Math.random().toString(),
            password: Math.random().toString()
        }
    })
    res.json({
    user
  })
})

app.listen(8080)