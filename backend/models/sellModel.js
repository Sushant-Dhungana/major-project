const mongoose = require('mongoose');

const sellSchema = mongoose.Schema(
    {
        //associating user to sell model
        user:{
            type:mongoose.Schema.Types.ObjectId,//telling the type to be an objectID. eg _id:someid11511
            required:true,
            ref:'User'
        },
        bike:{
            type:String,
            required:[true, 'Please add a text value'],
        },
        price:{
            type:Number,
            required:[true, 'Please add a price '],
        },

        brandName:{
            type:String,
            required:[true, 'Please enter brand name'],
        },

        kmRun: {
            type:Number,
            required:[true, 'Please enter km run'],
        },

        mileage: {
            type:Number,
            required:[true, 'Please enter mileage'],
        },

        engine:{
            type:Number,
            required:[true, 'Please enter engine displacement'],
        },

        pradesh: {
            type:String,
            required:[true, 'Please enter province or zone '],
        },

        lotNumber:{
            type:Number,
            required:[true, 'Please enter lot number '],
        },

        makeYear:{
            type:Number,
            required:[true, 'Please enter make year'],   
        },

        image:{
            type: String
        }
    
    },

    {
        timestamps: true
    }
    
)

module.exports = mongoose.model('Sell', sellSchema)