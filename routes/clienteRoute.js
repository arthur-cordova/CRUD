const Router = require("express").Router;
const router = Router();
const clienteController = require("../controller/clienteController");

// CRUD
router.get("/clientes", (req, res) => {
    const respcontroller = clienteController.buscar();
    respcontroller.then(clientes => res.status(200).json(clientes))
                .catch(error => res.status(400).json(error.message));
});

router.post("/cliente", (req, res) => {
    const novoCliente = req.body;
    const respcontroller = clienteController.criar(novoCliente);
    respcontroller.then(clienteInserido => res.status(201).json(clienteInserido))
                .catch(error => res.status(400).json(error.message));
});

router.put("/cliente/:id", (req, res) => {
    const {id} = req.params;
    const clienteAtualizado = req.body;
    const respcontroller = clienteController.alterar(clienteAtualizado, id);
    respcontroller.then(resultAtualizado => res.status(200).json(resultAtualizado))
                .catch(error => res.status(400).json(error.message));
});

router.delete("/cliente/:id", (req, res) => {
    const {id} = req.params;
    const respcontroller = clienteController.apagar(id);
    respcontroller.then(clienteDeletado => res.status(200).json(clienteDeletado))
                .catch(error => res.status(400).json(error.message));
});

module.exports = router;