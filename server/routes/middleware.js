function authenticated(req, res, next) {
  if (req.session.passport.user) {
    return next();
  }
  return res.redirect('/');
}

module.exports = { authenticated };
