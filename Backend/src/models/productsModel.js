const monogoose = require('mongoose')

const productsSchema = monogoose.Schema({
    category:String,
    name:String,
    description:String,
    price:Number,
    img:String
})
const Products = monogoose.model("Products",productsSchema)
module.exports = Products