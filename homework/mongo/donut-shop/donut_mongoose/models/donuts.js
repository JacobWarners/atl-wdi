//requirements: require mongoose
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

//create your donut schema:
var donutSchema = new mongoose.Schema({
//write your schema fields here
    name: {type: String, required: true},
    description: {type: String, required: true},
    img: String,
    price: Number,
    qty: Number
});

donutSchema.pre('save', function(next){
  now = new Date();
  this.updated_at = now;
  if ( !this.created_at ) {
    this.created_at = now;
  }
  next();
});

var donutModel = mongoose.model("donut", donutSchema);

//export your donut with module.exports()
module.exports = donutModel;