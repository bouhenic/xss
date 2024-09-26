const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

// Page vulnérable à une attaque XSS réfléchie avec un champ de formulaire
app.get('/', (req, res) => {
    const name = req.query.name || 'Anonyme';

    // Réponse HTML qui reflète l'entrée utilisateur sans échapper les caractères spéciaux (vulnérabilité XSS)
    res.send(`
        <h1>Bienvenue, ${name}!</h1>
        <p>Entrez un message ci-dessous :</p>
        <form method="GET" action="/">
            <input type="text" name="name" placeholder="Votre nom">
            <button type="submit">Envoyer</button>
        </form>
        <p>Ce message reflète l'entrée utilisateur directement, ce qui est vulnérable aux attaques XSS.</p>
    `);
});

// Lancement du serveur sur le port 3000
app.listen(3000, () => {
    console.log('Serveur vulnérable démarré sur http://localhost:3000');
});
