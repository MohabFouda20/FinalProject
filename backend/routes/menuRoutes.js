const express = require('express')
const menu = require('../models/menuModel')
const router = express.Router()
const menuController = require('../controllers/menuController')

router.route('/').get(menuController.getItems)
router.route('/:id').get(menuController.getSingleItem)
module.exports = router