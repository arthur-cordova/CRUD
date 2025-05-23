class Tables {
    init(connect) {
        this.connect = connect;
        this.createTableCliente();
        this.createTableProduto();
    }

    createTableCliente() {
        const sql =
        `   CREATE TABLE IF NOT EXISTS clientes (
            id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
            nome VARCHAR(100) NOT NULL,
            email VARCHAR(100) NOT NULL UNIQUE,
            telefone VARCHAR(15),
            data_de_nascimento DATE,
            data_cadastro DATE DEFAULT NOW() 
            );
        `;
        this.connect.query(sql, (error) => {
            if(error) {
                console.log("Erro ao criar a tabela clientes");
                console.log(error.message);
                return;
            }
            console.log("Tabela clientes criada com sucesso");
        });
        
    }

    createTableProduto() {
        const sql =
        `   CREATE TABLE IF NOT EXISTS produtos (
            id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
            nome VARCHAR(100) NOT NULL UNIQUE,
            preco DECIMAL(10, 2) NOT NULL,
            categoria VARCHAR(100)
            );
        `;

        this.connect.query(sql, (error) => {
            if(error) {
                console.log("Erro ao criar tabela produtos");
                console.log(error.message);
                return;
            }
            console.log("Tabela produtos criada com sucesso");
        })
    }
}

module.exports = new Tables();