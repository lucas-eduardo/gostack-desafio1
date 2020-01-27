const express = require('express');

const totalRequestMiddleware = require('./middlewares/totalRequests.middleware');
const projectsRouter = require('./routes/projects.route');

const server = express();

server.use(express.json());

server.use(totalRequestMiddleware, projectsRouter);

server.listen(3333);