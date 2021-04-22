const adminModel = require('../models/adminModel');
const bcrypt = require('bcrypt');
const apiResponse = require('../helpers/apiResponse');
const auth = require('../helpers/auth')

class AuthController {
    /**
     * Method To Render Log In Page
     */
    renderLogInPage = async (req, res) => {
        return res.render('auth/login');
    }

    /**
     * Method To Render Register Page
     */
    renderRegisterPage = async (req, res) => {
        return res.render('auth/register');
    }

    /**
     * Method To Register User
     */
    registerUser = [
        async (req, res) => {
            try {
                let newUser = req.body;
                newUser.password = await bcrypt.hash(newUser.password, 10);
                await new adminModel(newUser).save();
                return apiResponse.successResponse(res, "User Registered Successfully")
            } catch (err) {
                return apiResponse.errorResponse(res, err.message);
            }
        }
    ];

/**
 * Method to Login User
 */
    loginUser = [
        async (req, res) => {
            try {
                let user = await adminModel.findOne({ email: req.body.email });
                //If user exist proceed further otherwise return error response
                if (!user)
                    return apiResponse.errorResponse(res, "Invalid Credentials");
                else {
                    let isPasswordMatches = await bcrypt.compare(req.body.password, user.password);

                    //If password matches proceed further otherwise return error response
                    if (!isPasswordMatches)
                        return apiResponse.errorResponse(res, "Invalid Credentials");
                    else {
                        //Setup Session
                        req.session.userName = user.name;
                        req.session.email = user.email;
                        req.session.userId = user._id;
                        return apiResponse.successResponse(res, "User Logged In Successfully...");
                    }

                }
            } catch (err) {
                return apiResponse.errorResponse(res, err.message);
            }
        }
    ];

    //Method to logout user
    logout = [
        async (req, res) => {
            req.session.destroy();
            return res.redirect('/auth/login');
        }
    ]
}

module.exports = new AuthController();