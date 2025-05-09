const connection = require("../connection/connection");

class clienteModel {
    listar() {
        const sql = "SELECT * FROM clientes";
        return new Promise((resolve, reject) => {
            connection.query(sql, {}, (error, resposta) => {
                if (error) {
                    console.log("Ocorreu um erro na consulta");
                    reject(error);
                }
                console.log("Consulta realizada com sucesso..");
                resolve(resposta);
            });
        })
    }

    criar(novoCliente) {
        const sql = "INSERT INTO clientes SET ?";
        console.log("Dados do cliente a serem inseridos: ", novoCliente);
        return new Promise ((resolve, reject) => {
            connection.query(sql, novoCliente, (error, resposta) => {
                if (error) {
                    console.log("Erro ao inserir cliente");
                    console.log(error.message);
                    reject(error);
                }
                console.log("Cliente inserido com sucesso");
                resolve(resposta);
            });
        })
    }

    alterar(clienteAtualizado, id) {
        const sql = "UPDATE clientes SET ? WHERE id = ?";
        console.log(`Novos dados do cliente de id ${id} a serem inseridos: ${clienteAtualizado}`);
        return new Promise ((resolve, reject) => {
            connection.query(sql, {clienteAtualizado, id}, (error, resposta) => {
                if (error) {
                    console.log("Erro ao atualizar cliente");
                    console.log(error.message);
                    reject(error);
                }
                console.log("Cliente atualizado com sucesso");
                resolve(resposta);
            });
        })
    }

    apagar(id) {
        const sql = "DELETE FROM clientes WHERE id = ?";
        console.log("ID do cliente a ser removido: ", id);
        return new Promise ((resolve, reject) => {
            connection.query(sql, id, (error, resposta) => {
                if (error) {
                    console.log("Erro ao remover cliente");
                    console.log(error.message);
                    reject(error);
                }
                console.log("Cliente removido com sucesso");
                resolve(resposta);
            });
        })
    }
}

module.exports = new clienteModel();