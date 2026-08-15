import express from "express"
import { prismaClient } from "db/client"

const app = express()
app.use(express.json)

app.get("/get", (req, res) => {
  const user = prismaClient.user.findMany()
  res.json({
    msg: user
  })
})

app.post("/post",(req,res)=>{
    prismaClient.user.create({
        data:{
            username: Math.random.toString(),
            password: Math.random.toString()
        }
    })
})

app.listen(8080)