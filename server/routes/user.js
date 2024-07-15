const express = require('express');
const router = express.Router();
const {registerCredentials,registerUser,loginUser} = require('../controllers/AuthController');

router.route('/user/credentials').post(registerCredentials);
router.route('/user/create').post(registerUser);
router.route('/user/login').post(loginUser);

module.exports = router;