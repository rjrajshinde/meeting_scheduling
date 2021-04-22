const apiResponce = require('../helpers/apiResponse');
const MeetingSchema = require('../models/manageMeetingModel');
const auth = require('../helpers/auth')

class ManagersController {
    /**
     * 1.Method To Render Products Page
    */
    renderPage = [
        auth,
        async (req, res) => {
            return res.render('manageMeetings/index');
        }
    ];
    /**
     * 2.Methos to Create the Manager Data
     */

    createMeeting = [
        auth,
        async (req, res) => {
            try {
                let newMeeting = await new MeetingSchema(req.body).save();
                return apiResponce.successResponseWithData(res, 'User data created succesfully🤟🏼', newMeeting)
            } catch (err) {
                return apiResponce.errorResponse(res, err.message);
            }
        }
    ]

    /**
     * 3. Display the user 
     */
    displayMeeting = [
        auth,
        async (req, res) => {
            try {
                let displaydata = await MeetingSchema.find();
                return apiResponce.successResponseWithData(res, "User Data displayed succcesfully", displaydata);
            } catch (err) {
                return apiResponce.errorResponse(res, err.message);
            }
        }
    ]
    /**
     * 4. Delete the manager 
     */
    deleteMeeting = [
        auth,
        async (req, res) => {
            try {
                await MeetingSchema.findOneAndDelete({ _id: req.params.userId })
                return apiResponce.successResponse(res, "Data deleted Succesfully");
            } catch (err) {
                return apiResponce.errorResponse(res, err.message);
            }
        }
    ]

    /**
     * 5. Edit the manager 
     */
    editMeeting = [
        auth,
        async (req, res) => {
            try {
                let editdata = await MeetingSchema.findOneAndUpdate({ _id: req.params.userId }, { $set: req.body }, { new: true });
                return apiResponse.successResponseWithData(res, "Data Edited Successfully", editdata)
            } catch (err) {
                return apiResponse.errorResponse(res, err.message);
            }
        }
    ];
}

module.exports = new ManagersController();