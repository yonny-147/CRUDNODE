const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const connectDB = require('./db')
const taskRoutes = require('./routes/tasks')

const app = express()
const PORT = 5000

connectDB()

app.use(cors())
app.use(bodyParser.json)

app.use('/api/tasks', taskRoutes)

app.listen(PORT, () =>{
    console.log(`Servidor corriendo en http://localhost${PORT}`)
})