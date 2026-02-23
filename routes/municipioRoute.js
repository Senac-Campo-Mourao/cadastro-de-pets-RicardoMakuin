const express = require('express');
const router = express.Router();
const MunicipioController = require('../controllers/municipioControler');

router.get('/:id', MunicipioController.getById);

module.exports = router;
