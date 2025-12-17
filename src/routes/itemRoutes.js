const express = require('express');
const Item = require('../models/Item');

const router = express.Router();

// CREATE
router.post('/', async (req, res) => {
  try {
    const item = await Item.create(req.body);
    res.status(201).json(item);
  } catch (err) {
    res.status(400).json(err);
  }
});

// READ
router.get('/', async (req, res) => {
  const items = await Item.find();
  res.json(items);
});

// UPDATE
router.put('/:id', async (req, res) => {
  const item = await Item.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(item);
});

// DELETE
router.delete('/:id', async (req, res) => {
  await Item.findByIdAndDelete(req.params.id);
  res.json({ message: 'Item deleted' });
});

module.exports = router;
