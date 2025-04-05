const routerClientes = require("./clienteRoute");
module.exports = (app) => {
    app.use(routerClientes);
};