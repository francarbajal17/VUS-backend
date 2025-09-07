const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('✅ Conectado a MongoDB');
  })
  .catch((error) => {
    console.error('❌ Error conectando a MongoDB:', error);
  })

// Importar modelos
const Item = require('./models/Item');
const Drop = require('./models/Drop');

app.get('/api/drops', async (req, res) => {
  try {
    const drops = await Drop.find();
    res.json(drops);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/drops', async (req, res) => {
  try {
    const drop = new Drop(req.body);
    await drop.save();
    res.status(201).json(drop);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get('/api/items', async (req, res) => {
  try {
    const items = await Item.find().populate('drop');
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/items', async (req, res) => {
  try {
    const item = new Item(req.body);
    await item.save();
    res.status(201).json(item);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Simple API endpoint
app.get('/api', (req, res) => {
  res.json({ message: 'Hello from Express backend!' });
});

app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});

