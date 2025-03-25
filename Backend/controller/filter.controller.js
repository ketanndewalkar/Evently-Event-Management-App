const product = require('../models/product.schema');

const filtercontroller = async (req, res) => {
    try {
        const {color,maxvalue,minvalue,search} = req.query;
        console.log(req.query);
        let data;
        if(Array.isArray(color)){
            data = await product.find({name:{$regex:search,$options:"i"},price:{$gte:minvalue,$lte:maxvalue},color:{$in:color}});
        }else{
            data = await product.find({name:{$regex:search,$options:"i"},price:{$gte:minvalue,$lte:maxvalue},color:color});
        }
        console.log(data);
        res.status(200).json(
            data
        )  
    } catch (error) {
        console.log(error);
    }
}

module.exports = filtercontroller