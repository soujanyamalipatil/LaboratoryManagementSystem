const express=require('express')
const mongoose=require('mongoose')

const app=express()
const cors=require('cors');

const dbUrl='mongodb+srv://soujanya:soujanya@cluster0.hw1wo.mongodb.net/LaboratoryProjectDatabase?retryWrites=true&w=majority'
mongoose.connect(dbUrl,{
    useNewUrlParser:true,
    useUnifiedTopology:true
},(err)=>{
    if(!err){
        console.log('db connected successfully')
    }else{
        console.log('db not connected')
    }
})
app.use(cors())
const userRoutes=require('./routes/users')
const sampleRoutes=require('./routes/sampledetail')
//body parser middleware
app.use(express.urlencoded({extended:true}));

//json middleware
app.use(express.json());

//router level middleware
app.use('/users',userRoutes);
app.use('/samples',sampleRoutes);
app.get('/error',(req,res)=>{
    res.status(500).send('something went wrong')
})
module.exports=app