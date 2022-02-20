// SOURCE NUMERO STATUS: https://developer.mozilla.org/fr/docs/Web/HTTP/Status


// IMPORT MODELS SI BESOIN



// EXEMPLE CONTROLERS
// exports.getAllSauces = (req, res, next) => {
//   Sauce.find()   // appel a la base de donnee renvoie une promise
//     .then(sauces => res.status(200).json(sauces)) // on se rappel l'utilisation du 's' en plus sauce pour un objet sauceS pour tout les objet pour copurs API REST
//     .catch(error => res.status(400).json({ error }));
// };