const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Create schema for todo
const TodoSchema = new Schema({
  action: {
    type: String,
    required: [true, 'The todo text field is required'],
  },
  body: {
    type: String,
    required: [true, 'The todo text field is required'],
  },
  image: {
    type: String,
    required: [true, 'The todo text field is required'],
  },

});
// Create model for todo
const Todo = mongoose.model('todo', TodoSchema);
module.exports = Todo;