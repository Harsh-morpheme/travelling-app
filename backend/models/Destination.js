const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: String,
  image: String,
  locations: [{
    name: String,
    latitude: Number,
    longitude: Number,
    description: String,
    image: String
  }],
  posts: [{
    title: String,
    content: String,
    images: [String],
    author: String,
    createdAt: {
      type: Date,
      default: Date.now
    }
  }]
});

const destinationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  description: String,
  image: String,
  rating: {
    type: Number,
    min: 0,
    max: 5,
    default: 0
  },
  categories: [categorySchema],
  featured: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Destination', destinationSchema);