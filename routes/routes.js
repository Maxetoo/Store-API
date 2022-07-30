const express = require('express')
const storeRouter = express.Router()
const getAllProducts = require('../controllers/controller')
storeRouter.get('/', getAllProducts)
module.exports = storeRouter