//Variable d'environnement importé
const dotenv = require('dotenv')
dotenv.config()
//Importation des packages
const express = require('express')
const mysql = require('mysql')
const cors = require('cors')
const path = require('path')

const userRoutes = require('./routes/user')
const messageRoutes = require('./routes/message')

const app = express()

app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

//Connexion à la base de données MySQL
const db = mysql.createConnection({
  host : process.env.DB_HOST,
  user : process.env.DB_USER,
  password : process.env.DB_PASSWORD,
})

db.connect((err) => {
  if (err) throw err;
  console.log('Connexion à la base de données établi')
})

//En-tête de gestion des origines
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.use('/api/auth', userRoutes)
app.use('/api/message', messageRoutes)
app.use('/images', express.static(path.join(__dirname, 'images')))

module.exports = app;