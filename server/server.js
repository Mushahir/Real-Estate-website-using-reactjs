const express = require('express');
const app = express();
const apiRouter = require('./api');

app.use(express.json());

app.use('/api', apiRouter);

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
