const express=require('express')
const app=express()
const path=require('path')
const bodyparser=require('body-parser')
const rootdir=require('./utils/path')



const adminroutes=require('./routes/admin')
const shoproutes=require('./routes/shop')
app.use(bodyparser.urlencoded({extended:false}))



app.use(adminroutes)
app.use(shoproutes)
app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(rootdir,'views','404.html'))
})

app.listen(4000)