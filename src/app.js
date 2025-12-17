const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://mongo:27017/testdb')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// Routes
app.use('/items', require('./routes/itemRoutes'));

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
