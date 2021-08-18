const express= require('express');
require('../models/connection')
const app = express()
app.use(express.json())
app.use('/tasks',require('../routes/tasks'))
module.exports = app
