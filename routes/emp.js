const express = require('express')
var router = express()
const create = require('../controllers/emp')
const view=require('../controllers/emp')
const bodyparser = require('body-parser');
const update = require('../controllers/emp')
const remove = require('../controllers/emp')
router.use(bodyparser.json())
router.post('/create',create.create)
router.get('/',view.view)
router.patch('/:id',update.update)
router.delete('/delete/:id',remove.remove)
module.exports = router

