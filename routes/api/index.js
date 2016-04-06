var express = require('express');

var router = express.Router();

router.use(function(req, res, next) {
  req.isHtml = (req.headers['content-type'] === 'text/html');
  next();
});

router.use('/users', require('./users'));
router.use('/waypoints', require('./waypoints'));
router.use('/races', require('./races'));

router.use(function(req, res, next) {
  next(rest.notFound);
});

router.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    error: err.data || err.message
  });
});

module.exports = router;
