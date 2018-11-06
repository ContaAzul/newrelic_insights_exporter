const express = require('express');
const metrics = require('./routes/metrics');

const router = express.Router();

router.use('/metrics', metrics);

module.exports = router;
