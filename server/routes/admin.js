const express = require('express');
const router = new express.Router();
const mongoose = require('mongoose');
const User = require('mongoose').model('User');

router.get('/dashboard', (req, res) => {
  console.log("You're authorized as an admin to see this secret message.");
  res.set('Content-Type', 'application/json');
  res.status(200).json({
    // user values passed through from auth middleware
    message: "You are da admin",
    user: req.user
  });
});

module.exports = router;
