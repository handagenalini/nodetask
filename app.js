const express=require('express')
const app=express()

const bodyparser=require('body-parser')
const errorcontroller=require('./controllers/error')



const adminroutes=require('./routes/admin')
const shoproutes=require('./routes/shop')
app.use(bodyparser.urlencoded({extended:false}))



app.use(adminroutes)
app.use(shoproutes)
app.use(errorcontroller.geterror)

app.listen(4000)