const express = require('express');
const cors = require('cors');
const path = require('path');

process.env.NODE_ENV !== 'production' && require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 5000;

app
  .use(cors())
  .use(express.json())
  .use(express.urlencoded({ extended: false }));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(PORT, () => console.log('Server running on PORT: %d', PORT));
