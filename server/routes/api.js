const express = require('express');
const router = new express.Router();
const mongoose = require('mongoose');
const User = require('mongoose').model('User');

router.get('/dashboard', (req, res) => {
  console.log("You're authorized to see this secret message.");
  res.set('Content-Type', 'application/json');
  res.status(200).json({
    // user values passed through from auth middleware
    user: req.user
  });
});

router.put('/dashboard', (req, res) => {
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

module.exports = router;
