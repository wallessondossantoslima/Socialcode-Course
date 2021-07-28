const mysql = require("mysql");



connection.connect((error) => {
  if (error) {
    console.log("Erro ao conectar ao banco de dados:");
    return;
  }

  console.log("Conectado ao banco de dados");
});

module.exports = connection;
