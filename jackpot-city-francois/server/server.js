const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 8000;

app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  const content = {
    registerButton: 'Register',
    footerAmount: '$1,600',
    footerBonus: 'Deposit Bonus',
    footerSignup: 'Sign Up'
    };

  res.json(content);
});

app.listen(port);