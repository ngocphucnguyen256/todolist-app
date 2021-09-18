const express = require('express');
const router = express.Router()

const User = require('../models/UserModal')

router.get('/', (req, res, next) => {
    User.find()
    .then((usesr) => res.json(usesr))
    .catch(next)
})



router.post('/', (req, res, next) => {
    const {name , email} = req.body
    const newUser = new User({
        name : name,
        email : email
    })

    newUser.save()
    .then(() => res.json({
        message : 'create account successfully'
    }))
    .catch(next)
})


module.exports = router