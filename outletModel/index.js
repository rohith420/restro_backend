const mongoose = require('mongoose')

const outletSchema = new mongoose.Schema({
    outletImage: {
        type: String
    },
    outletName: {
        type: String
    },
   
    outlettDescription: {
        type: String
    }
}, {

    timeStamps: true
})
module.exports.outlet = new mongoose.model("outlet", outletSchema)