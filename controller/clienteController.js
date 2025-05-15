const clienteModel = require("../models/clienteModel");

class clienteController {
    buscar() {
        return clienteModel.listar();
    }

    criar(novoCliente) {
        return clienteModel.criar(novoCliente);
    }

    alterar(clienteAtualizado, id) {
        return clienteModel.alterar(clienteAtualizado, id);
    }

    apagar(id) {
        return clienteModel.apagar(id);
    }
}

module.exports = new clienteController();