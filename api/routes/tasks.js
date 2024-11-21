const express = require('express')
const router = express.Router()
const Task = require('../models/Task')

//crear tarea
router.post('/', async (req, res) => {
    try{
        const task = await Task.create(req,body)
        res.status(201).json(task)
    }catch(error){
        res.status(400).json({ message: error.message })
    }
})

//leer tareas
router.get('/', async (req,res) =>{
    try{
        const tasks = await Task.find()
        res.json(tasks)
    }catch(error){
        res.status(400).json({ message: error.message })
    }
})

//actualizar tarea
router.put('/:id', async (req,res) =>{
    try{
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new:true })
        res.json(tasks)
    }catch(error){
        res.status(400).json({ error: message })
    }
})

//Eliminar tarea
router.delete('/:id', async (req,res) =>{
    try{
        const task = await Task.findByIdAndDelete(req.params.id)
        res.json({ message: 'Tarea elimina' })
    }catch(error){
        res.status(500).json({ error: message })
    }
})

module.exports = router