const express = require('express');
const router = new express.Router();
const mongoose = require('mongoose');
const User = require('mongoose').model('User');
const Item = require('mongoose').model('Item');
const bodyParser = require('body-parser');


//GET
router.get('/dashboard', (req, res) => {
  // Get users info when logging in
  console.log("You're authorized as an admin to see this secret message.");
  res.set('Content-Type', 'application/json');
  res.status(200).json({
    // user values passed through from auth middleware
    message: "You are da admin",
    user: req.user
  });
});

router.get('/inventory', (req, res) => {
  //Gets inventory on inventory for both user and admin
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

router.get('/user-collect', (req, res) => {
//Gets users information
  console.log("You're authorized as an admin to see this secret message.");
  res.set('Content-Type', 'application/json');
  User.find((err, users) => {
    if(err)
      res.send(err)
    else{
      res.set('Content-Type', 'application/json');
      res.status(200).json({
        message: "Successfully collected users",
        users: users
      });
    }
  })
});

// POST
router.post('/inventory',(req, res) => {
  // Creating a new item in inventory
  var item = new Item();
  for (key in req.body) {
     item[key] = req.body[key];
   }
  item.save(function(err) {
    if (err)
      res.send(err);
      Item.find((err, items) => {
        if(err)
          res.send(err)
        else{
          res.set('Content-Type', 'application/json');
          res.json({
            message: "Item Created",
            items: items
          });
        }
      })
  });
})

// PUT
router.put('/user-collect/:user_id', (req, res) => {
  // Updates the user from admin route, gives users admin status
  User.findById(req.params.user_id, (err, user) =>{
    if (err)
      res.send(err);
    for(var key in req.body) {
        user[key] = req.body[key];
      }

    user.save(function(err) {
      if (err)
        res.send(err);
      res.json({
        message: "Admin Status Changed"
      });
    });
  });
})

router.put('/inventory/:item_id', (req, res) => {
  // Updates the inventory thru admin route

  Item.findById(req.params.item_id, (err, item) =>{
    if (err)
      res.send(err);
    for(var key in req.body) {
        item[key] = req.body[key];
      }

    item.save(function(err) {
      if (err)
        res.send(err);
    Item.find((err, items) => {
      if(err)
        res.send(err)
      else{
        res.set('Content-Type', 'application/json');
        res.status(200).json({
          message: "Items or something2",
          items: items
        });
      }
    })
    });
  });
})

// DELETE
// This deletes items
router.delete('/inventory/:item_id', (req, res) => {
   Item.remove({
     _id: req.params.item_id
   }, function(err, item) {
     if (err)
       res.send(err);
       Item.find((err, items) => {
         if(err)
           res.send(err)
         else{
           res.json({
             message: "Deleted item",
             items: items
           });
         }
       })
   });
 });





module.exports = router;
