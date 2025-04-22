const express = require("express");
const router = express.Router();
const { addToCart, getUserCart, deleteCartItem, clearCart, updateCartItem, decreaseQuantity, increaseQuantity, removeItem, uplaodImage } = require("../controller/CartController");
const {upload} = require("../utils/upload");
const { authorization } = require("../middleware/auth.middleware");

router.post("/add", upload.single("image"), addToCart);
router.post("/uploadImage", upload.single("image"), uplaodImage);
router.get("/get", getUserCart);
router.delete("/clear", clearCart);
router.put("/increase/:id", increaseQuantity);
router.put("/decrease/:id", decreaseQuantity);
router.delete("/remove/:id", removeItem);

module.exports = router;
