const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;

app.use(bodyParser.json());

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  // Perform basic authentication (replace with your authentication logic)
  if (username === 'user' && password === 'password') {
    res.status(200).json({ message: 'Authentication successful' });
  } else {
    res.status(401).json({ message: 'Authentication failed' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});