const express=require('express')

const router=express.Router()
const productcontroller=require('../controllers/products')

router.get('/add-product',productcontroller.getaddproduct)

router.post('/add-product',productcontroller.postaddproduct)
router.get('/contactus',productcontroller.getcontactus)
router.get('/success',productcontroller.getsuccess)
router.post('/contactus',productcontroller.postcontact);
module.exports=router