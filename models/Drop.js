const mongoose = require('mongoose');

const dropSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  fecha: {
    type: Date,
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Drop', dropSchema);