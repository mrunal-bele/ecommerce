import express from "express"
import mongoose from 'mongoose'
import userRouter from "./routers/userRouter.js"
import productRouter from "./routers/productRouter.js"
import dotenv from 'dotenv'
import orderRouter from "./routers/orderRouter.js"
import path from 'path'
import cors from 'cors'


dotenv.config()
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
mongoose.connect(process.env.MONGODB_URL || 'mongodb+srv://mrunalBele:528491%40%23%24Aa@estore.5k2gt.mongodb.net/estore?retryWrites=true&w=majority',{
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})



app.get("/", (req,res)=>{
    res.send("server is up!")
})

app.use('/api/users',userRouter)
app.use('/api/products', productRouter)
app.use('/api/orders', orderRouter)
app.get('/api/config/paypal', (req,res)=>{
    res.send(process.env.PAYPAL_CLIENT_ID || 'sb');
})

app.use((err, req, res, next) => {
    res.status(500).send({message: err.message})
});

if(process.env.NODE_ENV == 'production'){
    app.use(express.static('client/build'))
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')) 
    });
}

const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
});