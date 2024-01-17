const Products  = require("./../models/productsModel")

const getAllProducts = async(req,res)=>{
    const AllProducts = await Products.find({})
    res.send(AllProducts)
}
const deleteProducts = async(req,res)=>{
    const deletedProduct = await Products.deleteOne({_id:req.params.id})
    res.send({message:"silindi"})
}
const postProduct = async(req,res)=>{
    const postedProduct = new Products(req.body)
    postProduct.save()
}
module.exports={
    getAllProducts,
    postProduct,
    deleteProducts
}