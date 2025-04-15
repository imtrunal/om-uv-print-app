const express = require("express");
const router = express.Router();
const { addToCart, getUserCart, deleteCartItem, clearCart, updateCartItem, decreaseQuantity, increaseQuantity, removeItem } = require("../controller/CartController");
const {upload} = require("../utils/upload");
const { authorization } = require("../middleware/auth.middleware");

router.post("/add", authorization, upload.single("image"), addToCart);
router.get("/get", authorization, getUserCart);
router.delete("/clear", authorization, clearCart);
router.put("/increase/:id", authorization, increaseQuantity);
router.put("/decrease/:id", authorization, decreaseQuantity);
router.delete("/remove/:id", authorization, removeItem);

module.exports = router;
