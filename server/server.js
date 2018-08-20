//third party import
const express    = require('express'),
      bodyParser = require('body-parser');

//local import
const {ObjectID} = require('mongodb'),
      {mongoose} = require('./db/mongoose'),
      {Todo}     = require('./models/todo'),
      {User}     = require('./models/user');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });
  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos});
  }, (e) => {
    res.status(400).send(e);
  });
});

//Get /todos/:id
app.get('/todos/:id', (req, res) => {
   var id = req.params.id;  
  //Validate id using isValid
  if(!ObjectID.isValid(id)){
    return res.status(404).send();
  }
  //findById
  Todo.findById(id).then((todo) => {
   if (!todo) {
     return res.status(404).send();
   }
   res.send({todo});
 }).catch((e) => {
   res.status(400).send();
 });
});

app.listen(port, () => {
  console.log(`Started up at port ${port}`)
});

module.exports = {app};