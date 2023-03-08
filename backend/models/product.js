const mongoose = require("mongoose")
const { ObjectId } = mongoose.Schema;
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        maxlength: 32
    },
    description: {
        type: String,
        trim: true,
        required: true,

    },
    price: {
        type: NUmber,
        required: true,
        trim: true,
    },
    category: {
        // this category is linked with category schema
        type: ObjectId,
        ref: "Category",
        required: true,
    },
    stock: {
        type: Number,
    },
    sold: {
        type: Number,
        default: 0
    },
    photo: {
        data: Buffer,
        contentType: Strig,
    }
}, {timestamps: true})

module.exports = mongoose.model("Product", productSchema)