const express = require('express');
const router = express.Router()

const Todolist = require('../models/TodolistModal')



router.get('/', (req, res, next) => {
    Todolist.find()
    .then((tasks) => res.json(tasks))
    .catch(next)
})



router.post('/add', (req, res, next) => {
    const task = req.body.task
    const newTask = new Todolist({
        task : task
    })

    newTask.save()
    .then(() => res.json({
        message : 'create task successfully'
    }))
    .catch(next)
})


//update 

router.put('/:id/update', (req, res, next) => {
    Todolist.findByIdAndUpdate(req.params.id, {$set: req.body})
    .then((user) => res.json(user))
    .catch(next)
})



//delete 

router.delete('/:id/delete', (req, res, next) => {
    Todolist.findByIdAndDelete(req.params.id)
    .then((user) => res.json(user))
    .catch(next)
})



module.exports = router