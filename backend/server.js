const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
// const path = require('path');
const app = express();



app.use(bodyParser.json());
app.use(cors());

//api



const todolist = require('./api/todolist');
app.use('/api/todolist', todolist);


//connect db
const db = require('./database/database')
db.connect();


// app.use(express.static(path.join(__dirname, '../build')))
// app.get('*', (req, res, next) => {
//         res.sendFile(path.join(__dirname, '../build'))
// })

const port = process.env.PORT || 5000

app.listen(port, ()=> {
    console.log(`listening on port ${port}`)
})