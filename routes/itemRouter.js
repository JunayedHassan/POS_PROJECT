const express = require('express');
const { getItemController, addItemController } = require('../controllers/itemController.js');

const router = express.Router()

//routes
//Method - get
router.get('/get-item',getItemController);

//Method - POST
router.post('/add-item',addItemController);

module.exports = router;