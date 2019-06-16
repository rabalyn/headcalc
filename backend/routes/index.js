const express = require('express')
const router = express.Router()

router.use('/order', require('./order.js'))

module.exports = router
