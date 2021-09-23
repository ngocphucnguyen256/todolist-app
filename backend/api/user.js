// const express = require('express');
// const router = express.Router()

// const User = require('../models/UserModal')



// router.get('/', (req, res, next) => {
//     User.find()
//     .then((users) => res.json(users))
//     .catch(next)
// })



// router.post('/add', (req, res, next) => {
//     const {username , email} = req.body
//     const newUser = new User({
//         name : username,
//         email : email
//     })

//     newUser.save()
//     .then(() => res.json({
//         message : 'create account successfully'
//     }))
//     .catch(next)
// })



// router.get('/login', (req, res, next) => {
//     User.findOne({name : req.query.username, email : req.query.email})
//     .then((user) => res.json(user))
//     .catch(next)
// })



// module.exports = router