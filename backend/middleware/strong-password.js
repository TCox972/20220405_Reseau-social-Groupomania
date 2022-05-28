const passwordSchema = require('./password')

module.exports = (req, res, next) => {
    if (!passwordSchema.validate(req.body.password)) {
        res.setHeader('Content-Type', 'application/json')
        res.status(400).json({error : "Format du mot de passe requis : Min-4 -, Max-80, au moins une majuscule et une minuscule, pas d'espaces"})
    } else {
        next()
    }
}