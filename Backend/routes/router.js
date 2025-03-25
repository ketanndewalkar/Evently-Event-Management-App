const express = require("express");
const router = express.Router();
const {signup , login} = require("../controller/auth.controller")
const AuthMiddleware = require("../middleware/AuthMiddleware")
const {get_product,searchcontroller} = require("../controller/product.controller");
const filtercontroller = require("../controller/filter.controller");
const cartgetter = require("../controller/cart.getter");
const {profilecontroller,uploadprofile} = require("../controller/profile.related");
const { product_delete,quantity_update } = require("../controller/cart.update");
const product = require("../models/product.schema");
const cart = require("../models/cart.schema");
const multer = require("multer");
const { getFile } = require("../controller/getFile");
const { cartadd } = require("../controller/cardadd");

const upload = multer({ dest: 'uploads/' });

router.get("/",(req,res)=>{
    res.send("hello");
})

router.post("/login",login);

router.post("/signup",signup);

router.get("/search", searchcontroller);

router.get("/cart",AuthMiddleware,cartgetter);

router.post("/add-product-cart",AuthMiddleware,cartadd);
//get profile image
router.get("/profile_image",async (req,res)=>{
    console.log(req.query);
    const image = await getFile(req.query.id);
    res.status(200).send({image});
})

//profile handle
router.post("/profile",AuthMiddleware,upload.single("profile"),uploadprofile);

//filter route
router.get("/filter",filtercontroller);

//profile update
router.post("/profile-update",AuthMiddleware,profilecontroller)

//get_product
router.get("/get-product",get_product);

//cart-managing
router.delete("/product-delete",AuthMiddleware,product_delete);

//cart product quantity manager
router.patch("/quantity-update",AuthMiddleware,quantity_update);

//sample 
router.post("/post",async (req,res)=>{
    try {
        console.log("hi");
        const user = await cart.insertMany([
            {
                userId: "65fa1c2d9a3b4c0012345678",
                items: [
                    { productId: "65fa1c2d9a3b4c0012345679", quantity: 2 },
                    { productId: "65fa1c2d9a3b4c0012345680", quantity: 1 }
                ],
                createdAt: new Date()
            },
            {
                userId: "65fa1c2d9a3b4c0012345681",
                items: [
                    { productId: "65fa1c2d9a3b4c0012345682", quantity: 3 }
                ],
                createdAt: new Date()
            },
            {
                userId: "65fa1c2d9a3b4c0012345683",
                items: [
                    { productId: "65fa1c2d9a3b4c0012345684", quantity: 1 },
                    { productId: "65fa1c2d9a3b4c0012345685", quantity: 4 }
                ],
                createdAt: new Date()
            },
            {
                userId: "65fa1c2d9a3b4c0012345686",
                items: [
                    { productId: "65fa1c2d9a3b4c0012345687", quantity: 2 },
                    { productId: "65fa1c2d9a3b4c0012345688", quantity: 1 },
                    { productId: "65fa1c2d9a3b4c0012345689", quantity: 1 }
                ],
                createdAt: new Date()
            },
            {
                userId: "65fa1c2d9a3b4c0012345690",
                items: [
                    { productId: "65fa1c2d9a3b4c0012345691", quantity: 5 }
                ],
                createdAt: new Date()
            }
        ]);
        console.log(user);
        res.json({
            user
        })
    } catch (error) {
        console.log(error)
    }
})


module.exports = router;
