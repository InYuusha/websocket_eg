const express = require('express')
const app = express()
const socket = require('socket.io')


port=process.env.PORT || 3000
 const server = app.listen(port,()=>{
     console.log(`Server is running on Port ${port}`)
 })
 const io = socket(server)

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html')
})

io.on('connection',(socket)=>{
    console.log("User connected")

    socket.on('disconnect',()=>{
        console.log("User disconnected")
    })
})