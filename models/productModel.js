import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
    },
    description: {
        type: String,
        trim: true,
        required: true,
        maxLength: 500
    },
    price: {
        type: Number,
        trim: true,
        required: true,

    },
    unitsAvailable: {
        type: Number,
        required: true,
        max: 1000,
        min: 0
    },
    productImage: {
        type: String,
        trim: true
    }
});

export default mongoose.model("products", productSchema);