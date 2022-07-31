const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// const { verifyRecaptcha } = require('./middlewares/verifyRecaptcha');
const { sendEmail } = require('./route-handlers/send-email');


// app.get('/', (req, res) => {
//   const name = process.env.NAME || 'World';
//   res.send(`Hello ${name}!`);
// });

// app.post('/send-email', verifyRecaptcha, sendEmail);
app.post('/send-email', sendEmail);

const port = parseInt(process.env.PORT) || 8080;

app.listen(port, () => {
  console.log(`helloworld: listening on port ${port}`);
});