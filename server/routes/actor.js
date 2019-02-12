const express = require("express");
const Actor = require('../models/actor');

const router = express.Router();

router.get('/', (req, res) => {
	Actor.find().then(data => res.send(data));
})

// router.get('/:title', (req, res) => {
// 	Actor.findOne({title: res.params.title}).then(data => res.send(data));
// })

module.exports = router;