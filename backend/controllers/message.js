const model = require('../models')
const fs = require('fs')


//          CREATION D'UN NOUVEAU MESSAGE
exports.createMessage = (req, res, next) => {
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


//          AFFICHAGE DES MESSAGES SUR LE MUR
exports.readAllMessage = (req, res, next) => {
    model.Message.findAll()
        .then(message => res.status(200).json(message))
        .catch(error => res.status(400).json({error}))
}


//          LECTURE D'UN MESSAGE
exports.readMessage = (req, res, next) => {
    model.Message.findOne({
        where: {
            id: req.params.id
        }
    })
    .then(message => res.status(200).json(message))
    .catch(error => res.status(400).json({error}))
}

//          SUPPRESSION D'UN MESSAGE
exports.deleteMessage = (req, res, next) => {
    model.Message.findOne({
        where : {
            id: req.params.id
        },
    })
    .then(message => {
        if(!message) {
            return res.status(401).json({error})
        }
        model.User.findOne({
            where : {
                id: res.locals.userId
            }
        })
        .then(user => {
            if (message.attachment != null) {
                if(user.isAdmin === true || message.UserId === res.locals.userId) {
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
                if(user.isAdmin === true || message.UserId === res.locals.userId){
                    model.Message.destroy({
                        where: {id: req.params.id}
                    })
                    .then(() => res.status(200).json({message: 'Message supprimé !'}))
                    .catch(error => res.status(400).json({error}))
                } else {
                    return res.status(403).json({message: 'Requête non autorisée !'})
                }
            }
        })
        .catch(error => res.status(403).json({ error : 'Requête non autorisée !'}))
    })
    .catch(error => res.status(400).json({error : 'Vous ne pouvez pas effacer ce message'}))
}

//          GESTION DES LIKES
exports.likeMessage = (req, res, next) => {
    //A compléter
    
}