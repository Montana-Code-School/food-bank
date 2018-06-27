const express = require('express');
const router = new express.Router();
const mongoose = require('mongoose');
const User = require('mongoose').model('User');
const Item = require('mongoose').model('Item');
const bodyParser = require('body-parser');

router.get('/dashboard', (req, res) => {
  console.log("You're authorized as an admin to see this secret message.");
  res.set('Content-Type', 'application/json');
  res.status(200).json({
    // user values passed through from auth middleware
    message: "You are da admin",
    user: req.user
  });
});

router.get('/inventory', (req, res) => {
  console.log("Meh");
  Item.find((err, items) => {
    if(err)
      res.send(err)
    else{
      res.set('Content-Type', 'application/json');
      res.status(200).json({
        message: "Items or something",
        items: items
      });
    }
  })
});

router.post('/inventory',(req, res) => {
  var item = new Item();
  for (key in req.body) {
     item[key] = req.body[key];
   }
  item.save(function(err) {
    if (err)
      res.send(err);
    res.json({
      message: "Item Created"
    });
  });
})

router.put('/inventory/:item_id', (req, res) => {
  // Update the specific record according to user ID
  Item.findById(req.params.item_id, (err, item) =>{
    console.log(item);
    console.log(err);
    console.log(req.body);
    if (err)
      res.send(err);
    for(var key in req.body) {
        item[key] = req.body[key];
      }

    item.save(function(err) {
      if (err)
        res.send(err);
      res.json({
        message: "User Updated!"
      });
    });
  });
})

router.delete('/inventory/:item_id', (req, res) => {
   Item.remove({
     _id: req.params.item_id
   }, function(err, item) {
     if (err)
       res.send(err);
     res.json({
       message: "Successfully deleted!"
     });
   });
 });





module.exports = router;
