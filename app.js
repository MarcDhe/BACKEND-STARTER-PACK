const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const stuffRoutes = require('./routes/Stuff'); // IMPORTATION DU FICHIER STUFF DE ROUTES 
const userRoutes = require('./routes/User'); // IMPORTATION DU FICHIER  USER DE ROUTES



// EMPLACEMENT POUR LA CONNECTION A LA BASE DE DONNEES
//
//
//
// EMPLACEMENT POUR LA CONNECTION A LA BASE DE DONNEES


// INTERCEPTE TOUT LES TYPES DE REQUETES
app.use(express.json());

// CORS 'autorisation' 'd'acces/de connexion'
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

// DEFINIR LE CHEMIN DES ROUTES
app.use('/api/XXXXX', stuffRoutes); // defini la route de 'base' qu'aura les routes de  ./routes/stuff
app.use('/api/auth', userRoutes); // defini la route de 'base' qu'aura les routes de  ./routes/user


app.use(bodyParser.json()); // va de paire avec le bodyParser d'en haut


module.exports = app;