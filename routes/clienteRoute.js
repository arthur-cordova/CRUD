const Router = require("express").Router;
const router = Router();

// CRUD
router.get("/clientes", (req, res) => {
    res.send("Clientes consultados com sucesso");
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