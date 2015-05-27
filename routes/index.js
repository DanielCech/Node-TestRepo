var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/hello', function(req, res, next) {
  var data = {
    message: 'Hello world! Hello world!'
  };
  res.send(data);
});

router.get('/user/:id', function(req, res, next) {
  req.checkBody('name', 'Name cannot be empty').notEmpty();
  
  var errors = req.validationErrors()
  if (errors) {
    var data = {
	     error: "Invalid Reqest",
	     message: errors  //popis chyby
	   };
     res.send(data);
  }
  else {
    res.send('user ' + req.params.id);  
  }
});

router.post('/profile', function (req, res) {
  req.checkBody('name', 'Name cannot be empty').notEmpty();
  res.send('POST request to the homepage');
});

module.exports = router;
