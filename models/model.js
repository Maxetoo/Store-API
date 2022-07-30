const mongoose = require('mongoose')

const schema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name must be provided'],
        trim: true,
    },
    price: {
        type: Number,
        required: [true, 'price must be provided'],
        min: 200,
    },
    image: {
        type: String,
        required: [true, 'image should be attached to product'],
    },

    company: {
        type: String,
        trim: true,
    },
    shipping: {
        type: Boolean,
        default: true,
    },
    rating: {
        type: Number,
        default: 0,
    },
})

module.exports = mongoose.model('Store', schema)