const Task = require('../models/Jogos')

module.exports = class TaskController{

    static createJogo(req,res){

        res.render('tasks/create')
    }

    static async createJogoSave(req,res){
        const task = {
            title: req.body.title,
            genre: req.body.genre,
            developer: req.body.developer,
            year: req.body.year, 
            finished: false,
            onGoing: false,
            notPlayed: false,
            score: req.body.score,
        }

        await Task.create(task)
            .then(res.redirect('/tasks'))
    }

    static async showJogos(req,res){
        await Task.findAll({raw : true})
        .then((data)=>{
            let emptyJogos = false

            if (data.length === 0){
                emptyJogos = true
            }

            res.render('tasks/jogo',{tasks:data, emptyJogos})
        }).catch((err) => console.log(err))
    }

    static updateJogo(req,res){
        const id = req.params.id

        Task.findOne({where : {id:id}, raw:true})
        .then((data)=> {
            res.render('tasks/edit',{task:data})
        })
        .catch((err) => console.log(err))
    }

    static async updateJogoPost(req,res){
        const id = req.body.id
        const task = {
            title: req.body.title,
            genre: req.body.genre,
            developer: req.body.developer,
            year: req.body.year, 
            finished: false,
            onGoing: false,
            notPlayed: false,
            score: req.body.score,
        }

        await Task.update(task,{where:{id:id}})
        .then(res.redirect('/tasks'))
        .catch((err) => console.log(err))
    }

    static async removeJogo(req,res){
        const id = req.body.id

        await Task.destroy({where:{id:id}})
        .then(res.redirect('/tasks'))
        .catch((err) => console.log(err))
    }

    static async statusJogo(req,res){
        const id = req.body.id

        const task = {
            finished: req.body.finished === '0' ? true : false,
            onGoing: req.body.onGoing === '0' ? true : false,
            notPlayed: req.body.notPlayed === '0' ? true : false,
        }

        await Task.update(task, {where: {id:id}})
        .then(await res.redirect('/tasks'))
        .catch((err) => console.log())
    }
}