var express = require('express');
var router = express.Router();
require('dotenv').config();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "hello World!",
    user: "Charles",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send(process.env.SECRET_KEY);
  res.render('index', { arr: messages });
});

router.post('/new', function(req, res, next) {
  messages.push({ text: req.body.message, user: req.body.name, added: new Date()});
  res.redirect('/');
});

module.exports = router;
