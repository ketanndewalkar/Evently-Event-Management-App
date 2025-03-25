const Product = require("../models/product.schema"); // Assuming the product schema is defined in this file

// Controller function to search products by name
const searchcontroller = async (req, res) => {
    const keyword = req.query.keyword; // Get the keyword from query parameters
    try {
        const products = await Product.find({ name: { $regex: keyword, $options: 'i' } }); // Case-insensitive search
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving products", error });
    }
};

const get_product = async (req,res) =>{
    try {
        console.log("hii")
        console.log(req.query)
        const { id } = req.query;
        const product = await Product.findById(id);
        res.status(200).json({product});
        
    } catch (error) {
        console.log(error);
    }
}

module.exports = {searchcontroller,get_product};
