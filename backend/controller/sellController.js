const asyncHandler = require('express-async-handler')

const User = require('../models/userModels')
const Sell = require('../models/sellModel')

//get the single ad posted by a particular user

// getAd = asyncHandler(async (req, res) => {
//     const ad = await Sell.find()
// })


// private view of own ads
const getAds = asyncHandler(async (req, res) => {
const ads = await Sell.find({user: req.user.id})
res.status(200).json(ads)
})

//get all adds in the system

const getAllAds = asyncHandler(async (req, res) => {
    const ads = await Sell.find({})
    res.status(200).json(ads)
})




const setAd = asyncHandler(async (req, res) => {
    if(!req.body.bike){
        res.status(400)
        throw new Error('Please add a text field')
    }



    // for single image
    const ad = await Sell.create({
        // bike: req.body.bike,
        // price: req.body.price,
        // user: req.user.id,
        // image: req.file.filename,
        bike: req.body.bike,
        price: req.body.price,
        brandName:req.body.brandName,
        kmRun: req.body.kmRun,
        mileage: req.body.mileage,
        engine: req.body.engine,
        pradesh: req.body.pradesh,
        lotNumber: req.body.lotNumber,
        makeYear: req.body.makeYear,
        user: req.user.id,
        image: req.file.filename

    })
  

   

    res.status(200).json(ad)
})


const updateAd = asyncHandler(async (req, res) => {
    const ad = await Sell.findById(req.params.id)

    if(!ad){
        res.status(400)
        throw new Error('Please post an ad')
    }

    const user = await User.findById(req.user.id)

    if(!user){
        res.status(401)
        throw new Error('User not found')
    }

    // checking if logged in user matches the selling user
    if(ad.user.toString()!==user.id){
        res.status(401)
        throw new Error('User not authorized')
    }

    const updatedAd = await Sell.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    })
    res.status(200).json(updatedAd)
})

const deleteAd = asyncHandler(async (req, res) => {

    const ad = await Sell.findById(req.params.id)

    if(!ad){
        res.status(400)
        throw new Error('Please post an ad')
    }

    const user = await User.findById(req.user.id)

    if(!user){
        res.status(401)
        throw new Error('User not found')
    }

      // checking if logged in user matches the selling user
    if(ad.user.toString()!==user.id){
        res.status(401)
        throw new Error('User not authorized')
    }

    await ad.remove()
    
    res.status(200).json({
        id: req.params.id
    })

})

const getAd = asyncHandler(async(req,res)=>{
    const { _id, name, email }= await Sell.findById(req.user.id)
    res.status(200).json({
        id:_id,
        name,
        email
    })
})

const getAdsBySeaarch = asyncHandler(async(req,res)=>{
    const {searchQuery} = req.query
    const bike = new RegExp(searchQuery, 'i')
    const ads = await Sell.find({bike})
    res.status(200).json(ads)
})
    
    
    

module.exports = {
    getAllAds,
    getAds,
    setAd,
    updateAd,
    deleteAd,
    getAdsBySeaarch,
}