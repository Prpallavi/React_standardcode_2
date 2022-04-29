const express = require("express");
const UserController = require("../Controller/UserController");
const Profile= require("../Model/ProfileModel");
const router = express.Router()



router.post('/', UserController.Create);
router.get('/', UserController.View);
router.patch('/:id', UserController.Edit);
router.delete('/:id', UserController.Delete);

router.post('/profile', UserController.Createprofile);
router.get('/profileview/', UserController.Viewprofile);
router.patch('/profileview/:id', UserController.Editprofile);
router.delete('/remove/:id', UserController.Deleteprofile);

router.post('/country', UserController.Createcountry);
router.get('/countryview', UserController.Viewcountry);

router.post('/states', UserController.Createstates);
router.get('/statesview/:id', UserController.Viewstates);

router.get('/paginateprofile',UserController.Viewpaginate)


router.get('/filterprofile',UserController.Viewfilter)

module.exports = router


