const connection = require("../connection/connection");

class produtoModel {
    listar() {
        const sql = "SELECT * FROM produtos";
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

    criar(novoProduto) {
        const sql = "INSERT INTO produtos SET ?";
        console.log("Dados do produto a serem inseridos: ", novoProduto);
        return new Promise ((resolve, reject) => {
            connection.query(sql, novoProduto, (error, resposta) => {
                if (error) {
                    console.log("Erro ao inserir produto");
                    console.log(error.message);
                    reject(error);
                }
                console.log("Produto inserido com sucesso");
                resolve(resposta);
            });
        })
    }

    alterar(produtoAtualizado, id) {
        const sql = "UPDATE produtos SET ? WHERE id=?";
        console.log("Novos dados do produto de id ",id," a serem inseridos: ", produtoAtualizado);
        return new Promise ((resolve, reject) => {
            connection.query(sql, [produtoAtualizado, id], (error, resposta) => {
                if (error) {
                    console.log("Erro ao atualizar produto");
                    console.log(error.message);
                    reject(error);
                }
                console.log("Produto atualizado com sucesso");
                resolve(resposta);
            });
        })
    }

    apagar(id) {
        const sql = "DELETE FROM produtos WHERE id = ?";
        console.log("ID do produto a ser removido: ", id);
        return new Promise ((resolve, reject) => {
            connection.query(sql, id, (error, resposta) => {
                if (error) {
                    console.log("Erro ao remover produto");
                    console.log(error.message);
                    reject(error);
                }
                console.log("Produto removido com sucesso");
                resolve(resposta);
            });
        })
    }
}

module.exports = new produtoModel();