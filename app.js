const express = require('express')
const app = express()
const appNotFound = require('./middlewares/not-found')
const mongoose = require('mongoose')
require('dotenv').config()
const storeRouter = require('./routes/routes')
const storeProducts = require('./store.json')
const storeModel = require('./models/model')

// middlewares
app.use(express.json())

// requests

app.use('/api/v1/store', storeRouter)

app.use(appNotFound)

const port = 5000

const start = async(req, res) => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        await storeModel.deleteMany()
        await storeModel.create(storeProducts)
        app.listen(port, () => {
            console.log(`App is listening at port ${port}...`)
        })
    } catch (error) {
        console.log(error)
    }
}
start()

// port