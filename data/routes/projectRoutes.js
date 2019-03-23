
const router = require('express').Router();

const knex = require('knex');
const knexConfig = require('../../knexfile');

const db = knex(knexConfig.development);


// router.use(express.json());

router.get('/', async (req, res) => {
    try {
        const showProjects = await db('projects')
        res.status(200).json(showProjects)
    } catch (err){
        res.status(500).json(err)
    }
});

router.post('/', async (req, res) => {
    try {
        const project = req.body;
        const [id] = await db('projects').insert(project)
        const newProject = await db('projects').where({id}).first()
        res.status(201).json(newProject)
    } catch (err){
        res.status(500).json(err)
    }
});

module.exports = router;