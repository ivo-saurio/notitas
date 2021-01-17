let db = require('../database/models')

let indexController = {

    index: function(req, res){
       db.Nota.findAll()
       .then(function(notitas){
    return res.render('index', {
        notitas: notitas
    })
       })   
    },
    create: function(req,res){
        db.Nota.create({
            title: req.body.title,
            message: req.body.message
        })
        .then(function() {
            res.redirect('/')
        })       
},
    delete: function(req,res){
        db.Nota.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(function(){
            res.redirect('/')
        })
    }
}
module.exports = indexController