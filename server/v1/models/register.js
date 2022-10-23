const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Create schema for todo
const LoginSchema = new Schema({
    action: {
        type: String,
        required: [true, 'The todo text field is required'],
      },
      
  

});
// Create model for todo
const Login = mongoose.model('login', LoginSchema);
module.exports = Login;