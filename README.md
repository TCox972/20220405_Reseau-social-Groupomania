Jornat_Jean-Jerome_1_05042022

La mise en place du backend se fait en premier lieu.
Il prend en charge les variables d'environnement du fichier .env qu'il faut configurer avec :

DB_HOST : host 
DB_USER : nom d'utilisateur Mysql
DB_PASSWORD : Mot de passe Mysql

TOKEN_SECRET = 'RANDOM_TOKEN_SECRET'


BACKEND

Lancement du serveur : 

cd backend
nodemon

FRONTEND

cd frontend
cd groupamania
npm run serve

