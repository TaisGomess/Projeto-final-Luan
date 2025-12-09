import express from 'express';
import chalk from 'chalk';

import "./bootstrap/app.js"
import routes from "./routes/routes.js";
import initRelations from "./config/sequelize_relations.js";

const app = express();

app.use("/", routes);
initRelations();

/** ✅ Porta segura com fallback */
const nodePort = process.env.NODEWEB_PORT || 3000;
const webPort = process.env.IS_CONTAINER ? 8080 : nodePort;

app.listen(nodePort, () => {
    console.log(chalk.green(`Servidor: http://localhost:${webPort}`));
    console.log(chalk.yellow(`Apis Swagger: http://localhost:${webPort}/docs`));
});