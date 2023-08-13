const Sequelize = require("sequelize")

const conexion = new Sequelize("blog0023", "postgres", "Vuelamarte123.", {
    dialect: "postgres",
    host: "localhost",
    port: 5432
})

module.exports = conexion