const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  categoria: {
    type: String,
    required: false
  },
  talle: {
    type: String,
    enum: ['S', 'M', 'L', 'XL'],
    required: true
  },
  fotos: [{
    type: String,
    required: true
  }],
  sexo: {
    type: String,
    enum: ['Masculino', 'Femenino'],
    required: false
  },
  material: {
    type: String,
    required: false
  },
  corte: {
    type: String,
    required: false
  },
  detalles: {
    type: String,
    required: false
  },
  precio: {
    type: Number,
    required: true
  },
  drop: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Drop',
    required: false
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Item', itemSchema);