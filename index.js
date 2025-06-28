const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Building Api using copilot');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

app.get('/users', (req, res) => {

      res.json([{ id: 1, name: 'John Doe' }]);
});
