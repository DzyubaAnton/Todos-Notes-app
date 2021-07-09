const router = require('express').Router();
const Todo = require('../database/models/todo');
const { authenticated } = require('./middleware');

router.get('/todos', authenticated, async (req, res) => {
  try {
    const todos = await Todo.find({ user: req.session.passport.user });
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

router.patch('/:id/patchtodos', authenticated, async (req, res) => {
  try {
    const { todos } = req.body;
    todos.forEach(async (todo) => {
      await Todo.findByIdAndUpdate(todo.id, { isDone: todo.isDone });
    });
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
