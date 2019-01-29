var Primary = require('../models/model.js');
module.exports = {
  //get all
  index: function (req, res) {
    Primary.find({}, function (err, data) {
      if (err) {
        res.json({ errorMsg: "Couldn't find properly", data: data })
      } else {
        res.json({ msg: "Found", data: data })
      }
    })
  },
  show: function(req, res){
    Primary.findOne({_id:req.params.id}, function (err, data) {
      if (err) {
        res.json({ errorMsg: "Couldn't find properly", data: data })
      } else {
        res.json({ msg: "Found", data: data })
      }
    })
  },
  addNew: function(req, res){
    var primary = new Primary(req.body);
    primary.save(function(err, data){
      if (err) {
        res.json({ errorMsg: "Couldn't create properly", data: data })
      } else {
        res.json({ msg: "Created successfully", data: data })
      }
    })
  },
  addSecondary: function(req, res){
    Primary.updateOne({_id:req.params.id}, {$push:{items:req.body}}, function(err, data){
      if(err){
        res.json({errorMsg:"Could not update the object with the nested object", data:data})
      }else {
        res.json({msg:"Updated the object successfully", data:data})
      }
    })
  },
  update:function(req, res){
    Primary.updateOne({_id:req.params.id}, {title:req.body.title, url:req.body.url}, function(err, data){
      if(err){
        res.json({errorMsg:"Could not update the object with the nested object", data:data})
      }else {
        res.json({msg:"Updated the object successfully", data:data})
      }
    })
  },
  destroy:function(req, res){
    Primary.remove({_id:req.params.id}, function(err,data){
      if(err){
        res.json({errorMsg:"Could not delete the object", data:data})
      }else {
        res.json({msg:"Deleted the object successfully", data:data})
      }
    })
  },
  destroySecondary:function(req, res){
    Primary.updateOne({_id:req.params.id}, {reviews:req.body.reviews}, function(err,data){
      if(err){
        res.json({errorMsg:"Could not update the object with the nested object", data:data})
      }else {
        res.json({msg:"Updated the object successfully", data:data})
      }
    })
  }
  
};
