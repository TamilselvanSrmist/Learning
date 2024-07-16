const express = require('express');
const router = express.Router();
const {registerCredentials,registerUser,loginUser} = require('../controllers/AuthController');
const {bulkRegister} = require('../controllers/BulkRegisterController');
router.route('/user/credentials').post(registerCredentials);
router.route('/user/create').post(registerUser);
router.route('/user/login').post(loginUser);
router.route('/bulk/user/creation').post(bulkRegister);

module.exports = router;