const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const router = require('./src/routes')
const port = 5000

app.use(cors())
app.use(express.json())
app.use('/api', router)

mongoose.connect('mongodb://localhost:27017/crud', {
    useNewUrlParser:true,
    useUnifiedTopology:true
})

db = mongoose.connection
db.on('error', (error) => console.log(error))
db.once('open', () => console.log('Mongodb connected'))


app.listen(port, () => console.log(`Server listening on port ${port}`))