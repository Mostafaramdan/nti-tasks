const taskController=  new (require('../controller/tasksController'))
const express = require('express')
const router = new express.Router()
router.get('',(req,res)=>taskController.all(req,res))
router.get('/:id',(req,res)=>taskController.show(req,res))
router.post('',(req,res)=>taskController.add(req,res))
router.patch('/:id',(req,res)=>taskController.edit(req,res))
router.delete('/:id',(req,res)=>taskController.delete(req,res))
module.exports= router;
