const express = require('express');
const router = express.Router();

router.route('/').get((req, res) => {
res.send(`<h2>Hello from ${req.baseUrl}</h2>`);
});

module.exports = router;   
// This code sets up a basic Express router for the CrossFit WOD API.