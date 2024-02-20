'use strict';
/**
 * This file is responsible for loading routing files insite each and every modules.
 * Use it to load other routing files
 */

const express = require('express');
const router = express.Router();

/* Please add route file of module need to add... */
const homeRouter = require("./home/routes");
const eventsRouter = require("./events/routes");


router.use('/events', eventsRouter);
router.use('/', homeRouter);

module.exports = router;