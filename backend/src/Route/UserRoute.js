const express = require("express");
const UserController = require("../Controller/UserController");
const router = express.Router()



router.post('/', UserController.Create);
router.get('/', UserController.View);
router.patch('/:id', UserController.Edit);
router.delete('/:id', UserController.Delete);

router.post('/profile', UserController.Createprofile);
router.get('/profileview', UserController.Viewprofile);
module.exports = router
