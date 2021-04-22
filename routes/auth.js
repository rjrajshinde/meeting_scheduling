const router = require('express').Router();
const AuthController = require('../controllers/AuthController');

//Route To Render Log In Page
router.get('/login', AuthController.renderLogInPage);

//Route To Render Register User Page
router.get('/register', AuthController.renderRegisterPage);

//Route To Register User
router.post('/register', AuthController.registerUser);

//Route to login page
router.post('/login', AuthController.loginUser);

//Route to logout user
router.get('/logout', AuthController.logout);

module.exports = router;