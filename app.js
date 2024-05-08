//SETUP SERVER
const express = require('express');
require('dotenv').config();
const app = express();

// DB CONNECTION
const mongooseConnection = require('./services/mongooseConnection');
app.use(mongooseConnection);

// PARSERS
app.use(express.json());
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

// ROUTES
const signupRouter = require('./routes/signup');
const todosRouter = require('./routes/todos');
const todoRouter = require('./routes/todo');

app.get('/', (req, res) => res.send('todoAPI'));
app.use('/signup', signupRouter);
app.use('/todos', todosRouter);
app.use('/todo', todoRouter);

// ERROR HANDLER
const missingRouteHandler = require('./services/missingRouteHandler');
const errorHandler = require('./services/errorHandler');
app.use(missingRouteHandler);
app.use(errorHandler);

// START LISTENING
app.listen(process.env.PORT, () =>
  console.log(`App listening on port ${process.env.PORT}`)
);
