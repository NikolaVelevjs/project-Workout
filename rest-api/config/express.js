const express = require('express')

module.exports = (app) => {

    app.use('/static', express.static('static'))
    app.use(express.urlencoded({ extended: true }))
}