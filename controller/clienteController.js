const clienteModel = require("../models/clienteModel");

class clienteController {
    buscar() {
        // return clienteModel.listar();
        return "consulta realizada com sucesso...";
    }

    criar() {
        return "criação realizada com sucesso...";
    }

    alterar() {
        return "alterado o cliente com código " +id+ " com sucesso...";
    }

    apagar() {
        return "deletado o cliente com código " +id+ " com sucesso...";
    }
}

module.exports = new clienteController();