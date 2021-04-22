var router = require('express').Router()
const manageUsersController = require('../controllers/manageUsersController');

//Router To Render Users Page
router.get('/', manageUsersController.renderPage);

//Router to create Users
router.get('/display', manageUsersController.displayUser);

//Router to display the Users data
router.post('/create', manageUsersController.createUser )

//Router to delete the Users Data
router.put('/edit/:userId', manageUsersController.editUser)

//Router to Edit the Users data
router.delete('/delete/:userId', manageUsersController.deleteUser);

module.exports = router;