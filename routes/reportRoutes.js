// routes/reportRoutes.js
const express = require('express');
const { generateMISReport } = require('../controllers/reportController');
const router = express.Router();

router.get('/', generateMISReport);

module.exports = router;
