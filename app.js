const express=require('express');
const mongoose=require('mongoose');
const app=express();
const studentRoute=require('./api/routes/student')
const facultyRoute=require('./api/routes/faculty')
app.use('/student',studentRoute)
app.use('/faculty',facultyRoute)

mongoose.connect('mongodb+srv://Nexus:nodejs@cluster0.oc63yzw.mongodb.net/?retryWrites=true&w=majority')

mongoose.connection.on('error',err=>{
    console.log('connection failed')
})

mongoose.connection.on('connected',connected=>{
    console.log('connected with database....')
})

app.use((req,res,next)=>{
    res.status(404).json({
        error:'bad request'
    })
})

app.use((req,res,next)=>{
    res.status(200).json({
        message:'app is running'
    })
})

module.exports=app;