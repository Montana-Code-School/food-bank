const express = require('express');
const router = new express.Router();
const mongoose = require('mongoose');
const User = require('mongoose').model('User');
const axios = require('axios');

router.get('/dashboard', (req, res) => {
  console.log("You're authorized to see this secret message.");
  res.set('Content-Type', 'application/json');
  res.status(200).json({
    // user values passed through from auth middleware
    user: req.user
  });
});

router.post('/dashboard', (req, res) => {
  User.findById(req.user._id, function(err, user) {
    if (err)
      res.send(err);

    user.save(function(err) {
      if (err)
        res.send(err);
      res.json({
        message: "User Updated!"
      });
    });
  });
});

router.get('/recipes/:search_term', (req, res) => {
     console.log(req.params.search_term);
      let foodItem = req.params.search_term;
      let apiKey = '7e67a4fb022eb04b5c0f2e087119c728';
      let urlKey = 'http://food2fork.com/api/search?key=';
      let searchField = '&q=' + foodItem;
      let count = '&count=5';

     axios.get(urlKey + apiKey + searchField + count)
     .then( (response) => {
       res.json(response.data.recipes);
       console.log(response.data.recipes);
     })

     .catch( (error) => {
       console.log(error);
     });
});

module.exports = router;
