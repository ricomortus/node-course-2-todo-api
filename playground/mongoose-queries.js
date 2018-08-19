const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


// var id = '5b7946bb2088eb045b8aadd55a';

// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// } 

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });

// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo', todo);
// }).catch((e) => console.log(e));

var userId = '5b77f8cfe4cd4a15eb66f384';

User.findById(userId).then((user) => {
  if(!user){
    return console.log('User not found');
  }
  console.log('User', user);
}, (e) => {
  console.log(e);
});
