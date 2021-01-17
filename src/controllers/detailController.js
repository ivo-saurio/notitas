
let db = require('../database/models')

let detailController = {
    detail: function(req,res){
        return res.render('detail');
    },
    edit: function(req,res){
        db.Nota.findByPk(req.params.id)
        .then(function(notaEditada){
            res.render('detail', {notaEditada: notaEditada})
        })
     },
    save: function(req,res){
        db.Nota.update({
        title: req.body.title,
        message: req.body.message
        },
        {
            where: {
                id: req.params.id
            }
        })
        .then(function(){
            return res.redirect('/')
        })
    }
       
    
}

module.exports = detailController