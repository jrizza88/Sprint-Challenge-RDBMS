
const express = require('express');
const knex = require('knex');
const knexConfig = require('./knexfile');

const db = knex(knexConfig.development);

const server = express();

server.use(express.json());

// made this endpoint to make sure endpoints work correctly on browser. 
server.get('/api/projects', async (req, res) => {
    try {
        const showProjects = await db('projects')
        res.status(200).json(showProjects)
    } catch (err){
        res.status(500).json(err)
    }
});

server.post('/api/projects', async (req, res) => {
    try {
        const project = req.body;
        const [id] = await db('projects').insert(project)
        const newProject = await db('projects').where({id}).first()
        res.status(201).json(newProject)
    } catch (err){
        res.status(500).json(err)
    }
});

const port = process.env.PORT || 7777;

server.listen(port, () => {
    console.log(`\n API is listening on  http://localhost:${port} \n`)
})