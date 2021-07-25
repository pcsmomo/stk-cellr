const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send({ website: 'STK Cellr' });
});

const PORT = process.env.PORT || 4040;
app.listen(PORT);
