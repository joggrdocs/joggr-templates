// src/index.ts
import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World - This is my user authentication service!');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
