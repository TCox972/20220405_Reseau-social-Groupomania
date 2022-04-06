const dotenv = require('dotenv')
dotenv.config()
const express = require('express')
const mysql = require('mysql2')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())


const db = mysql.createConnection({
  host : process.env.DB_HOST,
  user : process.env.DB_USER,
  password : process.env.DB_PASSWORD
})

db.connect((err) => {
  if (err) throw err;
  console.log('Connexion établi')
})

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

module.exports = app;