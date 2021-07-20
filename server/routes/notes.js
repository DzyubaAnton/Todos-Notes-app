const router = require('express').Router();
const Note = require('../database/models/note');
const { authenticated } = require('./middleware');

router.get('/', authenticated, async (req, res) => {
  try {
    const notes = await Note.find({ user: req.session.passport.user }).sort({ createdAt: -1 });
    return res.json(notes).status(200);
  } catch (error) {
    return res.sendStatus(501);
  }
});

router.post('/:id/addnote', authenticated, async (req, res) => {
  try {
    const { text } = req.body;
    const newNote = await Note.create({ text, user: req.params.id });
    return res.json(newNote).status(200);
  } catch (error) {
    return res.sendStatus(501);
  }
});

router.patch('/:id/patchNote', authenticated, async (req, res) => {
  try {
    const { note } = req.body;
    await Note.findByIdAndUpdate(note._id, { text: note.text });
    return res.sendStatus(200);
  } catch (error) {
    return res.sendStatus(501);
  }
});

router.delete('/:id/deletenote', authenticated, async (req, res) => {
  try {
    await Note.findByIdAndDelete(req.body.id);
    return res.sendStatus(200);
  } catch (error) {
    return res.sendStatus(501);
  }
});

module.exports = router;
