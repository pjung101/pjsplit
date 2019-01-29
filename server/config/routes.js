const mongoose = require('mongoose');
var mainController = require('../controllers/mainController.js')
module.exports = function(app){
  app.get('/objects', function(req,res){
    mainController.index(req,res);
  })
  app.get('/object/:id', function(req, res){
    mainController.show(req, res);
  })
  app.post('/newObject', function(req, res){
    mainController.addNew(req,res);
  })
  app.put('/newReview/:id', function(req, res){
    mainController.addSecondary(req,res);
  })
  app.put('/editObject/:id', function(req, res){
    mainController.update(req,res);
  })
  app.delete('/remove/:id', function(req, res){
    mainController.destroy(req, res);
  })
  app.put('/removeSecondary/:id', function(req, res){
    mainController.destroySecondary(req, res);
  })
}
