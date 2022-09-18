const express = require('express')
const dotenv = require('dotenv')
const asyncHandler = require('express-async-handler')
const Sell = require('./models/sellModel')
const authRouter = require('./routes/userRoutes.js')
const sellRouter = require('./routes/sellRoutes.js')
const {errorHandler} = require('./middleware/errorHandler')
const connectDB = require('./config/db')
const colors = require('colors')
const cors = require('cors')
const app = express()

app.use(cors({
    orgin: '*'
}))

dotenv.config()

app.use('/uploads', express.static('uploads'))


const port = process.env.PORT

connectDB()

app.use(express.json())
app.use(express.urlencoded({extend:false}))

app.use('/', authRouter)
app.use('/sell', sellRouter)

//homepage
// public
//get all ads
app.get('/', asyncHandler(async  (req, res)=> {
   const ads = await Sell.find({})
   res.status(200).json(ads) 
}))

//get particular ad details
//public
app.get('/:id', asyncHandler(async (req, res)=> {
    const ad = await Sell.findById(req.params.id)
    res.status(200).json(ad)
}))

app.use(errorHandler)
app.listen(port, ()=>console.log(`listening on port ${port}`))
