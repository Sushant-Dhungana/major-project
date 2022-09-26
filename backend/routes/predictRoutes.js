const express =require('express')
const router = express()

const predictPrice = require('../controller/predictController')

router.post('/predict', predictPrice)

module.exports = router

