const { Schema, model } = require('mongoose');

const productSchema = new Schema({
    _id: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    }
});

module.exports = model('Product', productSchema);