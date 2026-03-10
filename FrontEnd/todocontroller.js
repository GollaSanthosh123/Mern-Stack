const Todo = require('./todo');

exports.createTodo = async (req, res) => {
    try{    
   const {task} = req.body;
   const todo = await Todo.create({task});
   res.status(201).json(todo);
}catch(err){
    res.status(500).send(err);
}
}
exports.getTodos = (req, res) => {
    res.json({
         message: "List of todos"
         });
}   
exports.updateTodo = (req, res) => {
    res.json({
         message: "Todo created successfully"
         });
}
exports.deleteTodo = (req, res) => {
    res.json({ 
        message: "Todo deleted successfully"
    });
}