require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
const { type } = require("os");
const { DATABASE_URL } = process.env;

const sequelize = new Sequelize(DATABASE_URL, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});
const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { Productos, Usuarios, Ventas, Ingredientes } = sequelize.models;
// Aca vendrian las relaciones
Productos.belongsToMany(Ventas, { through: "Productos_Ventas" }); //de muchos a muchos
Ventas.belongsToMany(Productos, { through: "Productos_Ventas" }); // de muchos a muchos
Usuarios.hasMany(Ventas, { as: "Ventas_User" }); // Un usuario puede tener muchas ventas
Ventas.belongsTo(Usuarios); // Una venta pertenece a un usuario
Productos.belongsToMany(Ingredientes, { through: "Producto_Ingredientes" }); //los productos pueden tener varios ingredientes
Ingredientes.belongsToMany(Productos, { through: "Producto_Ingredientes" }); //los ingredientes pueden tener varios productos

module.exports = {
  ...sequelize.models,
  conn: sequelize,
};
