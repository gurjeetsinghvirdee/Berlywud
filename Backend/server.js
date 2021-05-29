const express = require('express')
const mongoose = require('mongoose')
const userRouter = require('./routers/user.js')
const productRouter = require('./routers/product.js')
const orderRouter = require('./routers/orderRouter.js')
const dotenv = require('dotenv')
const path = require('path')
const Razorpay = require('razorpay')
const nanoid = require('nanoid')

dotenv.config()

const razorpayPublicKey = "rzp_test_tjgqJf8OgEA215"
const razorpaySecretKey = "0wIdYCiuPh7ydfOwhvTKyKEP"

console.log(` razorpayPublicKey`,  razorpayPublicKey)
console.log(` razorpaySecretKey`, razorpaySecretKey)

var instance = new Razorpay({
    key_id: razorpayPublicKey,
    key_secret: razorpaySecretKey
});

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended : true}))

const data = await fetch('http://localhost:5000/razorpay', {method: 'POST'}).then((response)=> 
    res.json()
) 
console.log(`data`, data)

const port = process.env.PORT || 5000
mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost:27017/berlywud',{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology: true
})

app.use('/api/users',userRouter)
app.use('/api/products',productRouter)
app.use('/api/orders', orderRouter);

app.get('/',(req,res) =>{
    res.send('Server is Ready')
})


// Payment Logo

app.get('/berlywud.png',(req,res) =>{
    res.sendFile(path.join(__dirname, '/logo-removebg-preview.png'))
})

app.post('/razorpay', async (req,res) =>{
    var option = {  
        receipt: nanoid() 
    };
    instance.orders.create(options, function(err, order) {  
        console.log(order);
    });
})


// app.get('/api/products/:id',(req,res)=>{
//     const productdetail = data.products.find((item)=> item.id === req.params.id)
//     if(productdetail){
//         res.send(productdetail)
//     }else{
//         res.status(404).send({ message:"Product Not Found"})
//     }
// })

app.use((err,req,res,next)=>{
    res.status(500).send({message : err.message})
})

app.listen(port,()=>{
    console.log(`server is up at port ${port}`)
})