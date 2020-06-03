const router = require('express').Router()
const helpers = require('./helpers.js')

router.route('/getAll')
.get(helpers.getAll)

router.route('/getOne/:id')
.get(helpers.getOne)
.put(helpers.edit)

module.exports = router