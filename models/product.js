const mongoose=require('mongoose')
const schema=mongoose.Schema

//structure of model
const productschema=new schema({
    name:String,
    price:Number,
    qty:Number,
    manf:String
})

module.exports=mongoose.model('product',productschema)