const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  },
  principalItem: {
    type: Boolean,
    required: true
  },
  sizes: {
    type: [],
    required: true
  },
  frontImage: {
    type: String,
    required: true
  },
  backImage: {
    type: String,
    required: true
  },
  section1LeftImage: {
    type: String,
    required: true
  },
  section1RightImage: {
    type: String,
    required: true
  },
  section2LeftImage: {
    type: String,
    required: true
  },
  section2RightImage: {
    type: String,
    required: true
  },
  genre: {
    type: String,
    enum: ['Masculino', 'Femenino'],
    required: false
  },
  material: {
    type: String,
    required: false
  },
  cut: {
    type: String,
    required: false
  },
  details: {
    type: String,
    required: false
  },
  price: {
    type: Number,
    required: true
  },
  drop: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Drop',
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Item', itemSchema);