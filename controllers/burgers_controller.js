let express = require('express');

let router = express.Router();

let burgers = require('../models/burger.js');

router.get('/', function(req, res){
    res.redirect('/burgers');
});

router.get('/burgers', function(req, res){
    burgers.all(function(data){
        res.render('index', {burger: data})
    });
});

router.post('/burgers/create', function(req, res){
    burgers.insert(req.body.burger_name, function(results){
        console.log(results);
        res.redirect('/');
    })
});

router.put('/burgers/:id', function(req, res){
    burgers.update(req.params.id, function(results) {
        console.log(req.params.id);
        res.sendStatus(200);
      });
})

module.exports = router;