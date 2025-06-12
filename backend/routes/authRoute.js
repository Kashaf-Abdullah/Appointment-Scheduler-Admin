const express = require('express');
// Initialize Express app
const router = express();
const auth=require('../middlewares/authMiddleware')
const authController=require('../controllers/authController')
const { loginValidator, registerValidator }=require('../helpers/validator')
router.post('/login',loginValidator,authController.loginUser)
router.post("/register", registerValidator, authController.registerUser);


module.exports=router
