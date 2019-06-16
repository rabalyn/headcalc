import debug from 'debug'

const express = require('express')
const router = express.Router()

const log = debug('headcalc:routes:order:info')
const logdebug = debug('headcalc:routes:order:debug')
log.log = console.log.bind(console)
logdebug.log = console.log.bind(console)

router.get('/getAllOrderList', (req, res) => {
  res.json({foo: 'bar', baz: 42})
})

module.exports = router
