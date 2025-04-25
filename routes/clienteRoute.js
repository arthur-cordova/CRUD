const Router = require("express").Router;
const router = Router();
const clienteController = require("../controller/clienteController");

// CRUD
router.get("/clientes", (req, res) => {
    const respcontroller = clienteController.buscar();
    res.send(respcontroller);
});

router.post("/cliente", (req, res) => {
    res.send("Cliente cadastrado com sucesso");
});

router.put("/cliente/:id", (req, res) => {
    const {id} = req.params;
    res.send("Cliente atualizado com sucesso");
});

router.delete("/cliente/:id", (req, res) => {
    const {id} = req.params;
    res.send("Cliente deletado com sucesso");
});

module.exports = router;