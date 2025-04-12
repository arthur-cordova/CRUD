const express = require("express");
const app = express();
const port = 3000;

const router = require("./routes/moduleRoute");
router(app);

const conexao = require("./connection/connection");
const table = require("./connection/table");
table.init(conexao);

app.listen(port, (error) => {
    if (error) {
        console.log("Erro");
    }
    console.log("Sistema Rodando");
});