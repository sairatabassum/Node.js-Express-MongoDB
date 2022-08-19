const express = require('express');

const app = express();

app.get('/', (req, res) => {
  //   res.status(200).send('Hell from the server side');
  res
    .status(200)
    .json({ message: 'Hello from the server side', app: 'natours' });
});

app.post('/', (req, res) => {
  res.send('You can post to endpoint');
});

const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
