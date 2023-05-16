const express = require('express');
const validateLogin = require('./middlewares/validateLogin');
const { login, userControler } = require('./controllers');
const validadeNewUser = require('./middlewares/validadeNewUser');
const validateToken = require('./middlewares/validadeToken');

// ...

const app = express();
app.use(express.json());

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.post('/login', validateLogin, login);

app.post('/user', validadeNewUser, userControler.createUser);
app.get('/user/:id', validateToken, userControler.getById);
app.get('/user', validateToken, userControler.getAll);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
