Jornat_Jean-Jerome_7_05042022

La mise en place du backend se fait en premier lieu.


Dans le dossier backend

Il prend en charge les variables d'environnement du fichier .env qu'il faut configurer avec :

DB_HOST : host 
DB_USER : nom d'utilisateur Mysql
DB_PASSWORD : Mot de passe Mysql

TOKEN_SECRET = 'RANDOM_TOKEN_SECRET'


//------------------

Création de la base de données

sequelize db:create

sequelize db:migrate

//------------------

Installation des packages voir package-json et version

npm install

lancement avec: npm run dev

//-------------------------------------------------------------------------------

Dans le dossier Frontend/Groupamania

Installation des packages voir package-json et version

npm install

lancement avec: npm run serve

//------------------

