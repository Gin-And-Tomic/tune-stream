var express = require('express')
  , router = express.Router()

router.use('/songs', require('./songs'))


module.exports = router
