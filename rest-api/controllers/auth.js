const userModel = require("../models/userModel")

async function register(req, res, next) {
    const { username, email, password, respass } = req.body

    return userModel.create({ username, email, password })
        .then(() => {
            res.send(userModel)
            console.log('registered')
        })
        .catch(err => {
            console.log(err)
        })
}

module.exports = {
    register
}