const apiResponce = require('../helpers/apiResponse');
const UserSchema = require('../models/manageUserModel');
const auth = require('../helpers/auth')

class ManagersController {
    /**
     * 1.Method To Render Products Page
    */
    renderPage = [
        auth,
        async (req, res) => {
            return res.render('manageUsers/index');
        }
    ];
    /**
     * 2.Methos to Create the Manager Data
     */

    createUser = [
        auth,
        async (req, res) => {
            try {
                let newUser = await new UserSchema(req.body).save();
                return apiResponce.successResponseWithData(res, 'User data created succesfully🤟🏼', newUser)
            } catch (err) {
                return apiResponce.errorResponse(res, err.message);
            }
        }
    ]

    /**
     * 3. Display the user 
     */
    displayUser = [
        auth,
        async (req, res) => {
            try {
                let displaydata = await UserSchema.find();
                return apiResponce.successResponseWithData(res, "User Data displayed succcesfully", displaydata);
            } catch (err) {
                return apiResponce.errorResponse(res, err.message);
            }
        }
    ]
    /**
     * 4. Delete the manager 
     */
    deleteUser = [
        auth,
        async (req, res) => {
            try {
                await UserSchema.findOneAndDelete({ _id: req.params.userId })
                return apiResponce.successResponse(res, "Data deleted Succesfully");
            } catch (err) {
                return apiResponce.errorResponse(res, err.message);
            }
        }
    ]

    /**
     * 5. Edit the manager 
     */
    editUser = [
        auth,
        async (req, res) => {
            try {
                let editdata = await UserSchema.findOneAndUpdate({ _id: req.params.userId }, { $set: req.body }, { new: true });
                return apiResponse.successResponseWithData(res, "Data Edited Successfully", editdata)
            } catch (err) {
                return apiResponse.errorResponse(res, err.message);
            }
        }
    ];
}

module.exports = new ManagersController();