const mongoose = require('mongoose')
const Schema = mongoose.Schema


const todolistSchema = new Schema({
    task : {
        type: 'String',
        require : true
    },
    createdAt: {
        type: 'Date',
        default : Date.now()
    }

    

})


module.exports = mongoose.model("Todolist", todolistSchema, "todolist")