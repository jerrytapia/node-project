const express = require('express');
const router = express.Router();

// Do work here
router.get('/', (req, res) => {
  // console.log('hey');
  // res.send('Hey! It works!');
  const jerry = { name: 'Jerry', age: 25};
  res.render('hello', {
    name: 'Jerry',
    dog: req.query.dog,
  });
});

router.get('/reverse/:name', (req, res) => {
  const reverse = [...req.params.name].reverse().join('');
  res.send(reverse);
})

module.exports = router;
