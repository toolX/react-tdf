const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = 3000;

const app = express();

app.use(bodyParser.json());

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello from server');
});

app.post('/enroll', (req, res) => {
  console.log(req.body);
  res.status(401).send({message: 'Data received'});
});

app.listen(PORT, () => {
  console.log(`Server is running on localhos ${PORT}`);
});
