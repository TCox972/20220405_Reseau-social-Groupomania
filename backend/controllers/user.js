const bcrypt = require('bcrypt')
const { urlencoded } = require('express')
const jwt = require('jsonwebtoken')

const User = require('../models/user')

exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            const user = new User({
                email: req.body.email,
                username: req.body.username,
                password: hash,
                biography: req.body.biography,
                isAdmin: req.body.isAdmin
            })
            user.save()
                .then(() => res.status(201).json({message : 'Utilsiateur créé !'}))
                .catch(errot => res.status(400).json({error}))
        })
        .catch(error => res.status(500).json({error}))
}

exports.login = (req, res, next) => {
    User.findOne({username: req.body.username})
        .then(user => {
            if(!user){
                return res.status(401).json({error: 'Utilisateur non trouvé !'})
            }
            bcrypt.compare(req.body.password, user.password)
                .then(valid => {
                    if(!valid) {
                        return res.status(401).json({error : 'Mot de passe incorrect !'})
                    }
                    res.status(200).json({
                        userId: user._id,
                        token: jwt.sign(
                            {userId: user._id},
                            'RANDOM_TOKEN_SECRET',
                            {expiresIn: '24h'}
                            )
                    })
                })
                .catch(error => res.status(500).json({error}))
        })
        .catch(res.status(500).json({error}))
}