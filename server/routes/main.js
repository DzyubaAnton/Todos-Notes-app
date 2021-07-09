const passport = require('passport');
const router = require('express').Router();
const User = require('../database/models/user');

// ================check session==============
router.get('/login', async (req, res) => {
  let user;
  try {
    user = await User.findById(req.session.passport.user);
    if (!user) return res.sendStatus(204);
    return res.status(200).json(user);
  } catch (error) {
    return res.sendStatus(501);
  }
});

// ==================loginByGoogle==========================

router.get('/google', passport.authenticate('google', {
  scope: ['profile', 'email'],
}));

// callback route for google to redirect to
// hand control to passport to use code to grab profile info
router.get('/google/redirect', passport.authenticate('google'),
  (req, res) => {
    res.redirect('http://localhost:3000');
  });

// ==================logout=======================
router.get('/logout', (req, res) => {
  // Удаляем сессию с сервера (или базы данных, если сессия хранится там).
  req.session.destroy();
  // Говорим клиенту, чтобы он удалил куку.
  res.clearCookie('sid');
  res.sendStatus(200);
});

module.exports = router;
