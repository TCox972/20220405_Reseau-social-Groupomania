// Import des packages de token et de cryptage

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

//Import du modele User
const db = require('../models/index')
const { User } = require('../models')

//Constantes de regex
const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

//Fontion métier d'enregistrement d'un nouvel utilisateur
exports.signup = (req, res, next) => {


    if (req.body.username == null || req.body.password == null || req.body.email == null) {
        return res.status(400).json({'error' : 'Paramètres manquants'})
    }

    if (req.body.username.length <= 3 || req.body.username.lenth >= 20) {
        return res.status(400).json({'error': 'Username doit être compris entre 4 et 19 caractères'})
    }

    if (!EMAIL_REGEX.test(req.body.email)) {
        return res.status(400).json({'error': 'Email invalide'})
    }

    //Hash du mot de passe
    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            const user = db.User.build({
                email: req.body.email,
                username: req.body.username,
                password: hash,
                biography: req.body.biography,
                isAdmin: req.body.isAdmin
            })
            user.save()
                .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
                .catch(error => res.status(400).json({ error }))
        })
    //.catch(error => res.status(500).json({error}))
}

//Fonction métier de connextion et d'authetification d'un nouvel utilisateur
exports.login = (req, res, next) => {

    //Récupération de la l'username de la requete et comparation avec la table User
    User.findOne({ where: { username: req.body.username } })
        .then(user => {
            if (!user) {
                return res.status(401).json({ error: 'Utilisateur non trouvé !' })
            }
            //Comparaison des hash de mot de passe de la requete avec celui de la BD
            bcrypt.compare(req.body.password, user.password)
                .then(valid => {
                    if (!valid) {
                        return res.status(401).json({ error: 'Mot de passe incorrect !' })
                    }
                    //Renvoie d'une réponse avec un userID et un token d'auth.
                    res.status(200).json({
                        userId: user.id,
                        token: jwt.sign(
                            { userId: user.id },
                            process.env.TOKEN_SECRET,
                            { expiresIn: '24h' }
                        )
                    })
                })
                .catch(error => res.status(500).json({ error }))
        })
        .catch(error => res.status(500).json({ error }))
}

//Fonction d'affichage de compte
exports.getAccount = (req, res, next) => {
    db.User.findOne({
        attributes: [ 'id', 'email', 'username', 'biography'],
        where: {id: res.locals.userId}
    })
    .then(user => res.status(200).json(user))
    .catch(error => res.status(500).json({error}))
}

//Fonction métier de modification de compte
exports.modifyAccount = (req, res, next) => {
   
}

//Fonction métiler de suppression de compte
exports.deleteAccount = (req, res, next) => {
        db.User.destroy({
            where: {id: res.locals.userId}
        })
        .then(() => res.status(200).json({message: 'Objet supprimé'}))
        .catch(error => res.status(400).json({error}))
}