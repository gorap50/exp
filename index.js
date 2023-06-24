const express=require('express')
const ejs=require('ejs')
const app=express()
// const bodyParser=require('body-parser')

// app.use(bodyParser.json());
app.use(express.json())
app.use(express.urlencoded())
app.set('view engine','ejs')

const path=require('path')

const Product=require('./models/product')
const mongoose=require('mongoose')
const url=mongoose.connect("mongodb://127.0.0.1:27017/sample")




app.get('/',(req,res)=>{
    const person={'name':'Gaurav'}
    res.render('home',person)

})

app.get('/about',(req,res)=>{
const products=[
    {name:"Iphone",price:21000},
    {name:"nestle",price:50},
    {name:"milo",price:100}
]
    res.render('about',{products})
 })


 const validateProductMiddleware=(req,res,next)=>{
    const {name,price,qty,manf}=req.body
    if(!name||!price||!qty||!manf)
    {
        return res.redirect('/product/save')
    }
    next()
    }

 app.post('/product/save',validateProductMiddleware,async(req,res)=>{
    // console.log( req.body)
   const product=await Product.create(req.body);
   if(!product){
    return res.redirect('/product/save')
   }
   res.redirect('/products')
 })

 app.get('/product/new',(req,res)=>{
    res.render('newProduct')
 })
//making dynamic
app.get('/product/:pid', async (req, res) => {
    try {
      const product = await Product.findById(req.params.pid);
      res.render('product-details', { product });
    } catch (error) {
      // Handle any errors that occur during the query
      console.error(error);
      res.render('error', { error: 'Failed to retrieve product details' });
    }
  });
  

 app.get('/products', async (req, res) => {
    try {
      const products = await Product.find();
      res.render('Product', { products });
    } catch (error) {
      // Handle any errors that occur during the query
      console.error(error);
      res.render('error', { error: 'Failed to retrieve products' });
    }
  });
  

    app.get('*',(req,res)=>{
        res.render('notf')
        })

app.listen('3005',()=>{
    console.log("Listning at port 3005")
})
///Hello This is Completed