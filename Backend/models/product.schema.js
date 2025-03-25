const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    stock: { type: Number, required: true, default: 1 },
    images: [{ type: String }], // Array of image URLs
    createdAt: { type: Date, default: Date.now },
    color: { type: String, required: true },
    
});



module.exports = mongoose.model("product", productSchema);
