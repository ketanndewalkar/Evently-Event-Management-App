const { default: mongoose } = require("mongoose");
const cart = require("../models/cart.schema");
const product = require("../models/product.schema");

const cartgetter = async (req,res) =>{
    //assuming that the user will get accessed in req.user and the cart objectID will be the same.
    try {
        const usercart = await  cart.findOne({userId:new mongoose.Types.ObjectId(req.user._id)});
        if(!usercart){
            return res.status(404).json({message:"Cart not found"});
        }
        const cartitems = usercart.items;
        let products = [];
        for (const ele of cartitems) {
            let item = await product.findById(ele.productId);
            if (item) {
                item = { ...item.toObject(), quantity: ele.quantity }; // Convert Mongoose document to plain object
                products.push(item);
            }
            
        }
        res.status(200).json({
            products
        })
    } catch (error) {
        console.log(error);    
    }
    
    
}

module.exports = cartgetter;