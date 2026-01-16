const Todo = require('../models/Todo');

exports.getTodos = async (req, res, next) => {
    try {
        const todos = await Todo.find().sort({createdAt: -1});
        res.json(todos);
    } catch (err) {
        next(err);
    }
};

exports.createTodo = async (req, res, next) => {
    try {
        const {title} = req.body;

        if (!title) {
            return res.status(400).json({message: 'Title is required'});
        }

        const todo = await Todo.create({title});
        res.status(201).json(todo);
    } catch (err) {
        next(err);
    }
};

exports.updateTodo = async (req, res, next) => {
    try {
        const {id} = req.params;
        const {title, completed} = req.body;

        const todo = await Todo.findByIdAndUpdate(id, {title, completed}, {new: true, runValidators: true});

        if (!todo) {
            return res.status(404).json({message: 'Todo not found'});
        }

        res.json(todo);
    } catch (err) {
        next(err);
    }
};

exports.deleteTodo = async (req, res, next) => {
    try {
        const {id} = req.params;

        const todo = await Todo.findByIdAndDelete(id);

        if (!todo) {
            return res.status(404).json({message: 'Todo not found'});
        }

        res.json({message: 'Todo deleted'});
    } catch (err) {
        next(err);
    }
};