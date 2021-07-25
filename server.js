const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send({ website: 'STK Cellr' });
});

const port = process.env.PORT || 4040;
app.listen(port, (error) => {
  if (error) throw error;
  console.log(`Server running on port ${port}`);
});
