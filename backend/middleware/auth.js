//Import du package de token
const jwt = require('jsonwebtoken')

//Methode d'analyse du token d'authentification
module.exports = (req, res, next) => {
    try {
        //Récupération du token dans le header de la requête
        const token = req.headers.authorization.split(' ')[1]
        //Vérification de la clé secrète
        const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET)
        //Vérification de l'userId présent dans le token
        const userId = decodedToken.userId
        res.locals.userId = userId
        if (req.body.userId && req.body.userId !== userId) {
            throw 'User Id non valid !'
        } else {
            next()
        }
    } catch (error) {
        res.status(401).json({error: 'Requête non authentifiée !'})
    }
}