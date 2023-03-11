const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const db = require('./utils/databases');
const app = express();
const port = 8000;
const initModels = require('./models/initModels');
const usersRoutes = require('./routes/users.routes');
const todosRoutes = require('./routes/todos.routes');

/* midelwares */
app.use(cors());
app.use(morgan());
app.use(express.json());
/**/

/*inicializa los modelos*/
initModels();
/* Configuracion db */
db.authenticate()
    .then(() => {
        console.log('db.connect');
    })
    .catch(err => console.log(err));

db.sync({ alter: true })
    .then(() => {
        console.log('sync');
    })
    .catch((err) => console.log(err));
/* Configuracion db */

/*Rutas*/
app.use(usersRoutes);
app.use(todosRoutes);
/*Rutas*/

/*Ejecución de aplicativo*/

app.get('/', (req, res) => {
    res.send('welcome');
})

/*Despliegue del aplicativo*/
app.listen(port, () => {
    console.log('Listening on port ' + port);
});