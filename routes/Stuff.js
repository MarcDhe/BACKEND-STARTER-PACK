const express = require('express');
const router = express.Router();   // A RAJOUTER POUR FAIRE FONCITONNE LES ROUTER

const stuffCtrl = require('../controllers/Stuff'); // IMPORTATION CONTROLLERS

//ROUTER: EXEMPLE
// router.get('/', auth, stuffCtrl.getAllSauces);  

module.exports = router; // ATTENTION NE PAS L'OUBLIE CELUI LA  cf express.routr plus haut
