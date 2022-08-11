// exports.myMiddleware = (req, res, next) => {
//   req.name = 'Jerry';
//   // res.cookie('name', 'Jerry is cool', {maxAge: 9000000});
//   if (req.name === 'Jerry') {
//     throw Error('That is a dumb name');
//   }
//   next();
// }

exports.homePage = (req, res) => {
  console.log(req.name);
  res.render('index');
};