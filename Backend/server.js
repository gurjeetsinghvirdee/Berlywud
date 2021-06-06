const express = require('express')
const mongoose = require('mongoose')
const userRouter = require('./routers/user.js')
const productRouter = require('./routers/product.js')
const orderRouter = require('./routers/orderRouter.js')
const dotenv = require('dotenv')
const path = require('path')
const Razorpay= require('razorpay')
const nanoid = require('nanoid')

dotenv.config()

const razorpayPublicKey = "rzp_test_tjgqJf8OgEA215"
const razorpaySecretKey = "0wIdYCiuPh7ydfOwhvTKyKEP"
console.log(`razorpayPublickey`, razorpayPublicKey)
console.log(`razorpayPublickey`, razorpaySecretKey)
var instance = new Razorpay({
    key_id: razorpayPublicKey,
    key_secret: razorpaySecretKey,
  });


const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended : true}))

const port = process.env.PORT || 5000
mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost:27017/berlywud',{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology: true
})

//Serving Berlywud logo
app.get('/berlywud.png',(req,res) =>{
    res.sendFile(path.join(__dirname,"greylogo2025.png"))
})

app.post('/razorpay',async(req,res) =>{
    try{
        console.log(req.body)
        const response = await instance.orders.create({
            amount: req.body.amount,
            reciept: req.body.reciept
        });
        res.json({
            id: response.id,
            amount : response.amount
        })
    }catch(error){
        console.log(error)
    }
})


app.use('/api/users',userRouter)
app.use('/api/products',productRouter)
app.use('/api/orders', orderRouter);



app.get('/',(req,res) =>{
    res.send('Server is Ready')
})

app.use((err,req,res,next)=>{
    res.status(500).send({message : err.message})
})

app.listen(port,()=>{
    console.log(`server is up at port ${port}`)
})