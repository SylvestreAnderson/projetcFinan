const Users = require('../models/Users.js')

module.exports = class User_Controller {
    static createUser(req, res) {
        res.render('users/create')
    }
}