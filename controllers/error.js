const path=require('path')
const rootdir=require('../utils/path')
exports.geterror=(req,res,next)=>{
    res.status(404).sendFile(path.join(rootdir,'views','404.html'))
}