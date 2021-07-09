function authenticated(req, res, next) {
  if (req.session.passport.user) {
    return next();
  }
  return res.status(501);
}

module.exports = { authenticated };
