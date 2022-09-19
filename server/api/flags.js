const router = require('express').Router()
const {Flag} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const flags = await Flag.findAll({
      order: [['year', 'ASC']]
    })
    res.json(flags)
  } catch (err) {
    next(err)
  }
})

router.get('/no', async (req, res, next) => {
  try {
    const flags = await Flag.findAll({
      where: {
        controversial: null
      },
      order: [['year', 'ASC']]
    })
    res.json(flags)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    var properCase = req.params.id
    properCase =
      properCase[0].toUpperCase() + properCase.slice(1, properCase.length)

    const flags = await Flag.findAll({
      where: {
        name: [properCase]
      },
      // Add order conditions here....
      order: [['year', 'ASC']]
    })
    res.json(flags)
  } catch (err) {
    next(err)
  }
})
