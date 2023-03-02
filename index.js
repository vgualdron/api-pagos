const express = require("express");
const app = express();
const jwt = require('jsonwebtoken');
const cors = require("cors");

var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

//nos ayuda a analizar el cuerpo de la solicitud POST
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//cargamos el archivo de rutas
require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);

app.listen(process.env.PORT||3300,() => {
    console.log("Servidor corriendo en el puerto 3300");
});

module.exports = app;