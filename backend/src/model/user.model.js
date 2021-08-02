const Connection = require("mysql2/typings/mysql/lib/Connection");
const connection = require("../config/database");

class UserModel {

    async getAllUsers() {
        const result = await connection.promise().query(`SELECT U.*, NA.name as nivel_acesso FROM USER U
        JOIN NIVEL_ACESSO NA on U.nivel_acesso_id = NA.id`);
            
        return result[0];
    }

    async createUser(data) {

        const result = await connection.promise().query(`INSERT INTO USER (firstname, lastname, email, nivel_acesso_id) values ('${data.firstname}', '${data.lastname}', '${data.email}','${data.nivel_acesso_id})`);
            
        return result;

    }

    async updateUser(id, body) {
        const result = await Connection.promise().query(`UPDATE USER SET firstname = "${data.firstname}
        ", lastname = "${data.lastname}", email = "${data.email}", "nivel_acesso_id = 2" WHERE id = "${id}"`);

        return result;
    }

     async removeUser(id) {
        const result = await Connection.promise().query(`DELETE FROM USER WHERE id = ${id}`);

        return result;
    }

    async getOneUser(id) {

        const result = await Connection.promise().query(`SELEC * FROM USER WHERE id = ${id}`);

        return result[0];
    }

}

module.exports = UserModel;
