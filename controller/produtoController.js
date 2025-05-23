const produtoModel = require("../models/produtoModel");

class produtoController {
    buscar() {
        return produtoModel.listar();
    }

    criar(novoProduto) {
        return produtoModel.criar(novoProduto);
    }

    alterar(produtoAtualizado, id) {
        return produtoModel.alterar(produtoAtualizado, id);
    }

    apagar(id) {
        return produtoModel.apagar(id);
    }
}

module.exports = new produtoController();