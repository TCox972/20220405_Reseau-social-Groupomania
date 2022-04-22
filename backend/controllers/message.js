const model = require('../models')
const fs = require('fs')

exports.createMessage = (req, res, next) => {
    let post = req.body.message
    if (req.file) {
        model.Message.create({
            UserId: res.locals.userId,
            title: req.body.title,
            content: req.body.content,
            attachment: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
        })
        .then(message => res.send(message))
        .catch(error => res.status(404).json({error}))
    } else {
        model.Message.create({
            UserId: res.locals.userId,
            title: req.body.title,
            content: req.body.content,
        })
        .then(() => res.status(201).json({message : 'Post créé !'}))
        .catch(error => res.status(404).json({error}))
    }
}

exports.readAllMessage = (req, res, next) => {
    model.Message.findAll()
        .then(message => res.status(200).json(message))
        .catch(error => res.status(400).json({error}))
}

exports.modifyMessage = (req, res, next) => {

}

exports.deleteMessage = (req, res, next) => {
    model.Message.findOne({
        where : {
            id: req.params.id,
            userId: res.locals.userId
        },
    })
    .then(message => {
        if(!message) {
            return res.status(401).json({error})
        }
        if (message.attachment != null) {
            if(user.isAdmin === true || message.userId === res.locals.userId) {
                const filename = message.attachment.split('/images')[1]
                return fs.unlink(`images/${filename}`), () => {
                    model.Message.destroy({
                        where: {id: req.params.id}
                    })
                    .then(() => res.status(200).json({message: 'Message supprimé !'}))
                    .catch(error => res.status(400).json({error}))
                }
            } else {
                return res.status(403).json({message: 'Requête non autorisée !'})
            }
        } else {
            model.Message.destroy({
                where: {id: req.params.id}
            })
            .then(() => res.status(200).json({message: 'message supprimé !'}))
            .catch(error => res.status(400).json({error}))
        }
    })
    .catch(error => res.status(400).json({error : 'Vous ne pouvez pas effacer ce message'}))
}

exports.likeMessage = (req, res, next) => {

}