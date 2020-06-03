const router = require('express').Router()
const helpers = require('./helpers.js')

router.route('/getAll')
.get(helpers.getAll)

router.route('/getOne/:id')
.get(helpers.getOne)
.put(helpers.edit)
.delete(helpers.delete)

router.route('/findSet/:id')
.get(helpers.relation)

module.exports = router