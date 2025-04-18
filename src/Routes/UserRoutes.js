const express = require('express');
const { userRegister, userLogin, changeUserPassword } = require('../controller/UserController');
const router = express.Router();
const { authorization } = require('../middleware/auth.middleware');

//User Register
router.post('/register', userRegister);
//User Login
router.post('/login', userLogin);
//Change Password
router.put('/change-password', changeUserPassword);
//get all users
//Protected Route
router.get('/auth/verify', (req, res) => {
    res.json({ success: true, message: "Token is valid" });
});

module.exports = router;