const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productName: {
        type: String
    },
    producttechno: {
        type: String
    },
    productformat: {
        type: String
    },
    productspeed: {
        type: String
    },
    productresurs: {
        type: String
        },
        productImage: {
            type:String
        },
    cloudinaryPublicId: {
        type:String
    }
});

const ProductModel = mongoose.model('ProductModel', productSchema)
module.exports = ProductModel