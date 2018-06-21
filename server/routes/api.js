const express = require('express');
const router = new express.Router();
const mongoose = require('mongoose');
const User = require('mongoose').model('User');

router.get('/dashboard', (req, res) => {
  res.status(200).json({
    message: "You're authorized to see this secret message.",
    // user values passed through from auth middleware
    user: req.user
  });
});

router.get('/api/dashboard', (req, res) => {
  res.set('Content-Type', 'application/json');
  res.send('{"message":"Hello from the other side!"}');
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

// router.delete('/dashboard',function(req, res){
//   User.remove({
//     _id:req.user._id
//   },
//
// function(err, user){
//   if(err)
//     res.send(err)
//   res.json({
//     message:"Successfully deleted"
//   });
// });
module.exports = router;
