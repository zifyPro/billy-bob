const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const { conn } = require("./db");
const routes = require("./routes");
const cors = require("cors"); // Agrega esta línea para importar el middleware CORS

const app = express();
const port = 3000;

// Agrega los middleware
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(cookieParser());
app.use(morgan("dev"));

// Habilita CORS para todas las rutas
app.use(cors()); // Agrega esta línea para habilitar CORS

// Configura rutas y controladores
app.use("/", routes);

// Sincroniza todos los modelos a la base de datos.
conn.sync({ force: false }).then(() => {
  // Inicia el servidor
  app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
  });
});
