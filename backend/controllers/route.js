const express = require('express'); //Import the express dependency
const app = express();
const router = express.Router();
const jwt = require('jsonwebtoken');

router.get('/testinglogin', (req, res) => {
  res.json({ message: 'Hello world' });
});

router.post('/login', (req, res) => {
  //
  const username = req.body.username;
  const user = { name: username };
  //this is constant because there's no expiration
  const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
  
  res.json({ accessToken: accessToken})
});

module.exports = router;


