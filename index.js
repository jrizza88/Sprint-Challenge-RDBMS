
const express = require('express');

const projectRoutes = require('./data/routes/projectRoutes');
const actionRoutes = require('./data/routes/actionRoutes');

const knex = require('knex');
const knexConfig = require('./knexfile');

const db = knex(knexConfig.development);

const server = express();

server.use(express.json());

server.use('/api/projects', projectRoutes);
server.use('/api/actions', actionRoutes);


// made this endpoint to make sure endpoints work correctly on browser. 
server.get('/', (req, res) => {
    res.send(`<h2>Welcome to the Project and Actions application! \n
    Please type /api/projects or /api/actions to view some of the endpoints! </h2>`)
});

// server.post('/api/projects', async (req, res) => {
//     try {
//         const project = req.body;
//         const [id] = await db('projects').insert(project)
//         const newProject = await db('projects').where({id}).first()
//         res.status(201).json(newProject)
//     } catch (err){
//         res.status(500).json(err)
//     }
// });

const port = process.env.PORT || 7777;

server.listen(port, () => {
    console.log(`\n API is listening on  http://localhost:${port} \n`)
})