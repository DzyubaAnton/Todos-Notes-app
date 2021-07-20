const router = require('express').Router();
const Todo = require('../database/models/todo');
const { authenticated } = require('./middleware');

router.get('/', authenticated, async (req, res) => {
  try {
    const todos = await Todo.find({ user: req.session.passport.user }).sort({ createdAt: -1 });
    return res.json(todos).status(200);
  } catch (error) {
    return res.sendStatus(501);
  }
});

router.post('/:id/addtodo', authenticated, async (req, res) => {
  try {
    const { text } = req.body;
    const newTodo = await Todo.create({ text, user: req.params.id });
    return res.json(newTodo).status(200);
  } catch (error) {
    return res.sendStatus(501);
  }
});

router.patch('/:id/patchtodo', authenticated, async (req, res) => {
  try {
    const { todo } = req.body;
    await Todo.findByIdAndUpdate(todo._id, { isDone: todo.isDone });
    return res.sendStatus(200);
  } catch (error) {
    return res.sendStatus(501);
  }
});

router.delete('/:id/deletetodo', authenticated, async (req, res) => {
  try {
    await Todo.findByIdAndDelete(req.body.id);
    return res.sendStatus(200);
  } catch (error) {
    return res.sendStatus(501);
  }
});

module.exports = router;
