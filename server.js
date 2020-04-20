const express = require('express');

const ProjectRouter = require('./projects/project_router.js');
// const ResourceRouter = require('./resources/resource_router.js');
// const TaskRouter = require('./task/task_router.js');

const server = express();

server.use(express.json());
server.use('/api/project', ProjectRouter);
// server.use('/api/resource', ResourceRouter);
// server.use('/api/task', TaskRouter);

module.exports = server;