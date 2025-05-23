const routerClientes = require("./clienteRoute");
const routerProdutos = require("./produtoRoute");
module.exports = (app) => {
    app.use(routerClientes);
    app.use(routerProdutos);
};