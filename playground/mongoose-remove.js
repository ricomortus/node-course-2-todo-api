const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

//Todo.findOneAndRemove
//Todo.findByIdAndRemove
Todo.findOneAndRemove({_id:'5b7ba89336ba9a7e1d853ea7'}).then((done) => {
  console.log(todo);
});

Todo.findByIdAndRemove('5b7ba89336ba9a7e1d853ea7').then((todo) => {
  console.log(todo);
});