const clienteModel = require("../models/clienteModel");

class clienteController {
    buscar() {
        return clienteModel.listar();
    }

    criar() {
        return clienteModel.criar(novoCliente);
    }

    alterar() {
        return clienteModel.alterar(clienteAtualizado, id);
    }

    apagar() {
        return clienteModel.apagar(id);
    }
}

module.exports = new clienteController();