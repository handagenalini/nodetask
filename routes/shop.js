const express=require('express')

const router=express.Router()

const productscontroller=require('../controllers/products')
router.get('/',productscontroller.getshop)
module.exports=router