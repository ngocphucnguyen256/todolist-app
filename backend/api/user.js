const express = require('express');
const router = express.Router()

const User = require('../models/UserModal')



router.get('/', (req, res, next) => {
    User.find()
    .then((users) => res.json(users))
    .catch(next)
})



router.post('/add', (req, res, next) => {
    const {username , email} = req.body
    const newUser = new User({
        name : username,
        email : email
    })

    newUser.save()
    .then(() => res.json({
        message : 'create account successfully'
    }))
    .catch(next)
})



router.post('/login', (req, res, next) => {
    User.find({name : req.body.username, email : req.body.email})
    .then((user) => res.json(user))
    .catch(next)
})



module.exports = router