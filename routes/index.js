const express = require('express');
const router = express.Router();
const storeController = require('../controllers/storeController');

//because myMiddleware has the next() in its function body, it will proceed to the next function after the comma
router.get('/', storeController.homePage);
router.get('/add', storeController.addStore);
router.post('/POST', storeController.createStore);


module.exports = router;
