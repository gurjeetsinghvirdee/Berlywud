const express = require('express');
const product = require('./product.json')

const app = express()
const port = process.env.PORT || 5000

app.get('/',(req,res) => {
    res.send('Server is ready')
})

app.get('/api/products',(req,res) => {
    res.json(product)
})

app.get('/api/products/:id',(req,res) => {
    const productdetail = product.find((item)=> item.id === req.params.id )
    if (productdetail){
        res.send(productdetail)
    }else {
        res.status(404).send({message: "Product not found"})
    }
})

app.listen(port,() => {
    console.log(`server is up at port ${port}`)
})
