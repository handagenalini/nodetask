const path=require('path')
const rootdir=require('../utils/path')
exports.getaddproduct=(req,res,next)=>{
    res.sendFile(path.join(rootdir,'views','add-product.html'))
}
exports.postaddproduct=(req,res,next)=>{
    
    res.redirect('/')
}
exports.getcontactus=(req,res,next)=>{
    res.sendFile(path.join(rootdir,'views','contactus.html'))
}
exports.getsuccess=(req,res,next)=>{
    res.sendFile(path.join(rootdir,'views','success.html'))


}
exports.getshop=(req,res,next)=>{
    res.sendFile(path.join(rootdir,'views','shop.html'))
}
exports.postcontact= (req, res, next) => {
    console.log(req.body,'-----------------');
    res.redirect('/success');
}