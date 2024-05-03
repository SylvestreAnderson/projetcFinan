const express = require('express')
const router = express.Router()

const UserController = require('../controllers/User_Controlle.js')
router.get('/add', UserController.createUser)

module.exports = router