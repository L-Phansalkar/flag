const router = require('express').Router()
const {Flag} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const flags = await Flag.findAll()
    console.log('get', flags)
    res.json(flags)
  } catch (err) {
    next(err)
  }
})
