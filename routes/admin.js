const express=require('express')
const path=require('path')
const router=express.Router()
const rootdir=require('../utils/path')
router.get('/add-product',(req,res,next)=>{
    res.sendFile(path.join(rootdir,'views','add-product.html'))
})
router.post('/add-product',(req,res,next)=>{
    
    res.redirect('/')
})
router.get('/contactus',(req,res,next)=>{
    res.sendFile(path.join(rootdir,'views','contactus.html'))
})
router.get('/success',(req,res,next)=>{
    res.sendFile(path.join(rootdir,'views','success.html'))


})
router.post('/contactus', (req, res, next) => {
    console.log(req.body,'-----------------');
    res.redirect('/success');
});
module.exports=router