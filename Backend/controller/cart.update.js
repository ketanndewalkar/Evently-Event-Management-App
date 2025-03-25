const { default: mongoose } = require("mongoose");
const cart = require("../models/cart.schema");
const product = require("../models/product.schema");

const product_delete = async (req, res) => {
  try {
    console.log("hi")
    const { id } = req.query;
    if (!id) {
      return res.status(400).json({ message: "Product ID is required" });
    }

    console.log("Product ID to remove:", id);
    console.log(req.user)

    const updateCart = await cart.findOneAndUpdate(
      { userId: new mongoose.Types.ObjectId(req.user._id) }, // Find the cart by userId
      { $pull: { items: { productId: new mongoose.Types.ObjectId(id) } } }, // Remove item where productId matches
      { new: true } // Return the updated document
    );
    
    if (!updateCart) {
      return res.status(404).json({ message: "Cart not found or product not in cart" });
    }

    res.status(200).json({
      message: "Product deleted successfully",
      cart: updateCart, // Optional: Return updated cart
    });
  } catch (error) {
    console.error("Error deleting product:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const quantity_update = async (req, res) => {
  try {
    console.log(req.body);
    const { id, quantity } = req.body;
    const updatedcart = await cart.findOneAndUpdate(
      { userId: new mongoose.Types.ObjectId(req.user._id), "items.productId": new mongoose.Types.ObjectId(id) },
      { $set: { "items.$.quantity": quantity } }
  );
    if (!updatedcart) {
      return res.status(400).json({ message: "Product not found" });
    }
    console.log(updatedcart);
    // res.status(200).json({
    //   message: "Quantity updated successfully",
    //   product: updatedProduct,
    // });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
  
};

module.exports = { product_delete, quantity_update };
