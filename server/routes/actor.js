const express = require("express");
const Actor = require('../models/actor');

const router = express.Router();

router.get('/', (req, res) => {
	Actor.find().then(data => res.send(data));
})

router.get('/:firstname', (req, res) => {
	Actor.findOne({firstname: req.params.firstname}).then(data => res.send(data));
})

module.exports = router;