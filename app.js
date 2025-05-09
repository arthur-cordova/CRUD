const express = require("express");
const app = express();
const port = 3000;
const router = require("./routes/moduleRoute");
const connection = require("./connection/connection");
const table = require("./connection/table");

app.use(express.json());
app.use(express.urlencoded({extended: true}));

table.init(connection);
router(app);

app.listen(port, (error) => {
    if (error) {
        console.log("Erro");
        return;
    }
    console.log("Sistema Rodando na porta "+port);
});