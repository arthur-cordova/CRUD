const Router = require("express").Router;
const router = Router();
const produtoController = require("../controller/produtoController");

router.get("/produtos", (req, res) => {
    const respcontroller = produtoController.buscar();
    respcontroller.then(produtos => res.status(200).json
    (produtos)).catch(error => res.status(400).json(error.message)); 
});

router.post("/produto", (req, res) => {
    const novoProduto = req.body;
    const respcontroller = produtoController.criar(novoProduto);
    respcontroller.then(produtoInserido => res.status(201).json(produtoInserido)).catch(error => res.status(400).json(error.message));
});

router.put("/produto/:id", (req, res) => {
    const {id} = req.params;
    const produtoAtualizado = req.body;
    const respcontroller = produtoController.alterar(produtoAtualizado, id);
    respcontroller.then(resultAtualizado => res.status(200).json(resultAtualizado)).catch(error => res.status(400).json(error.message));
});

router.delete("/produto/:id", (req, res) => {
    const {id} = req.params;
    const respcontroller = produtoController.apagar(id);
    respcontroller.then(produtoDeletado => res.status(200).json(produtoDeletado)).catch(error => res.status(400).json(error.message));
});

module.exports = router;