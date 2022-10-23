const express = require('express');
const router = express.Router();
const Login = require('../models/register');
router.get('/login', (req, res, next) => {
  // This will return all the data, exposing only the id and action field to the client
  Login.find({})
    .then((data) => res.json(data))
    .catch(next);
});
router.post('/login', (req, res, next) => {
  if (req.body.action) {
    Login.create(req.body)
      .then((data) => res.json(data))
      .catch(next);
  } else {
    res.json({
      error: 'The input field is empty', 
    });
  }
});

router.delete('/login/:id', (req, res, next) => {
  Login.findOneAndDelete({ _id: req.params.id })
    .then((data) => res.json(data))
    .catch(next);
});
router.get('/login1/:id', (req, res, next) => {
  Login.findOne({ action: req.params.action })
    .then(() => res.json(true))
    .catch(next);
});
module.exports = router;