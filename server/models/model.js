var mongoose = require('mongoose')
var gObjectSchema = new mongoose.Schema({
  name: {type:String, required:true, minlength:3},
  items:[{
    item:{type:String, default:""},
    price:{type:Number, default:""}
  }]
})
var gObject = mongoose.model('gObject', gObjectSchema);
module.exports = gObject;
