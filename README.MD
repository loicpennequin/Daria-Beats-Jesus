# DariaBeatsJesus : projet de blog personnel avec CMS from scratch

## Installation

### installer nodeJS

google est votre pote

### Installation des dépendances

à la racine du projet, npm install

### créer un fichier password.js à la racine du projet avec le contnu suivant :

exports.password = 'votre-mot-de-passe-mySQL'

### insérez vos identifiants mySQL :

dans le fichier database.js, remplissez vos champs utilisateurs, host et mot de passe

### installation de la base de données

dans le dossier data , mysql -u root -p > dariabeatsjesus.sql
ou dans phpmyadmin : importer

### lancement du serveur node

à la racine du projet, node server.js

puis allez sur http://localhost:8080
