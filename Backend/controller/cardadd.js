const cart = require("../models/cart.schema");

const cartadd = async (req, res) => {
    try {
        const { id, quantity } = req.body;
        console.log(id, quantity);
        
        const value = { productId: id, quantity: quantity };

        const usercart = await cart.findOneAndUpdate(
            { userId: req.user._id },
            { $push: { items: value } },  // Use $push to allow multiple same productIds
            { new: true, upsert: true }  // Return updated cart & create if doesn't exist
        );

        console.log(usercart);
        res.status(200).json({ success: true, cart: usercart });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};

module.exports = {cartadd};