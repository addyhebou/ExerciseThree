const express = require('express');

const router = express.Router();

router.get("/", (req, res) => res.send("I'll do it in a Honda Accord"))

module.exports = router;