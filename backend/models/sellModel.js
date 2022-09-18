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

        image:{
            type: String
        }
    
    },

    {
        timestamps: true
    }
    
)

module.exports = mongoose.model('Sell', sellSchema)