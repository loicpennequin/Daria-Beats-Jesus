# DariaBeatsJesus : projet de blog personnel avec CMS from scratch

## Installation

### installer nodeJS

google est votre pote

### Installation des dépendances

à la racine du projet, npm install

### créer un fichier password.js à la racine du projet avec le contnu suivant :

exports.password = 'votre-mot-de-passe-mySQL'

### insérez vos identifiants mySQL :

dans le fichier database.js, remplissez vos champs utilisateurs, host etc. ne touchez pas à password.

### installation de la base de données

dans le dossier data , mysql -u root -p > dariabeatsjesus.sql
ou dans phpmyadmin : importer blabla c'est pas dur

### lancement du serveur node

à la racine du projet, tapez node server.js
vous devriez voir s'afficher "server running at port 8080". Si ce n'est pas le cas, soit vous avez merdé quelque part, soit c'est moi qui ne sait pas écrire un README correctement. Si vous êtes surs que c'est moi, faites le moi savoir s'il vous plait.

enfin, allez sur http://localhost:8080 pour consulter le site (lien provisoire 'admin' sur la home, vu que seule l'interface admin est faite pour l'instant.)
