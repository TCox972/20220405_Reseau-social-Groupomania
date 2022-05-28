const passwordValidator = require('password-validator')

var passwordSchema = new passwordValidator()

passwordSchema
.is().min(4)
.is().max(80)
.has().lowercase()
.has().uppercase()
.has().not().spaces()

module.exports = passwordSchema

