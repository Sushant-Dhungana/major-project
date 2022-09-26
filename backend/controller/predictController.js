const asyncHandler = require('express-async-handler')
const axios = require('axios');


const predictPrice = (req, res) => {
    const {brandName, engine, lotNumber, pradesh, kmRun, makeYear, mileage} = req.body
    data = {
        brandName:brandName,
        engine:parseInt(engine),
        lotNumber:parseInt(lotNumber),
        pradesh:pradesh,
        kmRun:parseInt(kmRun),
        makeYear:parseInt(makeYear),
        mileage:parseInt(mileage)
    }
    
    axios.post('http://127.0.0.1:5000/predict', data)
    
    
    .then(
        (response) => {
            var result = response.data;
            res.json({
               "price":result
            })
        },
        (error) => {
            console.log(error);
        }
    )
      
}
module.exports = predictPrice