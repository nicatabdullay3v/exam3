const router = require("express").Router()
const productsController = require("./../controllers/productsControllers")

router.get("/products",productsController.getAllProducts)
router.post("/products",productsController.postProduct)
router.delete("/products/:id",productsController.deleteProducts)
module.exports = router