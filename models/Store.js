const mongoose = require('mongoose');
// allows us to use the built in ES6 promise property
mongoose.Promise = global.Promise;
const slug = require('slugs');

const storeSchema = new mongoose.Schema({
  name: {
    type: String,
    //do most of your data normalization as close to the model as possible
    trim: true,
    // entering a string instead of true makes it so that string appears when false
    requried: 'Please enter a store name!'
  },
  slug: String,
  description: {
    type: String,
    trim: true
  },
  tags: [String]

});

//save will not happen until
storeSchema.pre('save', function(next) {
  // need to check if name is modified
  if (!this.isModified('name')) {
    next(); //skip it
    return; // stops the following function from happening
  }
  this.slug = slug(this.name);
  next();
  //TODO: make it more resilient to ensure slugs are all unique
})

module.exports = mongoose.model('Store', storeSchema);