const express = require('express');
const validateLogin = require('./middlewares/validateLogin');
const { login, userController, categorieController } = require('./controllers');
const validadeNewUser = require('./middlewares/validadeNewUser');
const validateToken = require('./middlewares/validadeToken');
const validadeCategorie = require('./middlewares/validadeCategorie');

// ...

const app = express();
app.use(express.json());

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.post('/login', validateLogin, login);

app.post('/user', validadeNewUser, userController.createUser);
app.get('/user/:id', validateToken, userController.getById);
app.get('/user', validateToken, userController.getAll);

app.post('/categories', validadeCategorie, validateToken, categorieController.createCategorie);
app.get('/categories', validateToken, categorieController.getAll);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
