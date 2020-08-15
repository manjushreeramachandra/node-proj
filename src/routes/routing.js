const express = require('express');
const router = express.Router();
const readDynamicFile = require('../constrollers/fetchfunction')

router.get('/get_meta_data/:module_name/:screen_name',readDynamicFile.read_dynamic_file)
module.exports = router;



