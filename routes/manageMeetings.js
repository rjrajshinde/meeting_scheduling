var router = require('express').Router()
const manageMeetingController = require('../controllers/manageMeetingsController');

//Router To Render Users Page
router.get('/', manageMeetingController.renderPage);

//Router to create Users
router.get('/display', manageMeetingController.displayMeeting);

//Router to display the Users data
router.post('/create', manageMeetingController.createMeeting )

//Router to delete the Users Data
router.put('/edit/:userId', manageMeetingController.editMeeting)

//Router to Edit the Users data
router.delete('/delete/:userId', manageMeetingController.deleteMeeting);

module.exports = router;