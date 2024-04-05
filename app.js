const express = require('express');
require('dotenv').config();

const app = express();

const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

async function main() {
  await mongoose
    .connect(process.env.MONGODB_URI)
    .then(console.log('Succesful connection to mongodb'));
}

main().catch((err) => console.log(err));

app.get('/', (req, res) => {
  return res.send('Received a GET HTTP method');
});

app.post('/', (req, res) => {
  return res.send('Received a POST HTTP method');
});

app.put('/', (req, res) => {
  return res.send('Received a PUT HTTP method');
});

app.delete('/', (req, res) => {
  return res.send('Received a DELETE HTTP method');
});

app.use((err) => {
  console.log(err);
});

app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}! :)`)
);
