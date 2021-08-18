const tasksModel = require('../models/tasks.model')
class Tasks{
    async all(req,res){
        res.send(await tasksModel.find());
    }
    async add(req,res){
        new tasksModel(req.body).save()
        res.send(200)
    }
    async edit(req,res){
        const record = await tasksModel.findByIdAndUpdate(req.params.id,req.body)
        res.send(record) 
    }
    async show(req,res){
        const record = await tasksModel.findById(req.params.id)
        res.send(record) 
    }
    async delete(req,res){
        await tasksModel.findByIdAndDelete(req.params.id)
        res.send(200)
    }
}
module.exports = Tasks
