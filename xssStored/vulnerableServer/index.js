const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session'); // Utilisation des sessions pour gérer l'authentification
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

// Configuration des sessions
app.use(session({
    secret: 'secret-key', // Clé secrète pour signer le cookie de session
    resave: false,        // Ne pas sauvegarder la session si elle n'a pas été modifiée
    saveUninitialized: true, // Sauvegarder une session non initialisée
    cookie: { secure: false } // En production, vous devez utiliser secure: true avec HTTPS
}));

// Stockage des commentaires en mémoire
let comments = [];

// Simple base de données utilisateur en mémoire (pour la démo)
const users = { 
    'user1': 'password1',
    'user2': 'password2'
};

// Page de login
app.get('/login', (req, res) => {
    res.send(`
        <h1>Login</h1>
        <form method="POST" action="/login">
            <label for="username">Nom d'utilisateur :</label>
            <input type="text" id="username" name="username" required><br><br>
            <label for="password">Mot de passe :</label>
            <input type="password" id="password" name="password" required><br><br>
            <button type="submit">Se connecter</button>
        </form>
    `);
});

// Route pour gérer la soumission du formulaire de login
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (users[username] && users[username] === password) {
        // Authentification réussie, sauvegarder l'utilisateur dans la session
        req.session.user = username;
        res.redirect('/comments');
    } else {
        res.send('Nom d\'utilisateur ou mot de passe incorrect. <a href="/login">Réessayer</a>');
    }
});

// Middleware pour vérifier si l'utilisateur est authentifié
function isAuthenticated(req, res, next) {
    if (req.session.user) {
        return next();
    } else {
        res.redirect('/login');
    }
}

// Page pour afficher les commentaires (accès réservé aux utilisateurs authentifiés)
app.get('/comments', isAuthenticated, (req, res) => {
    let commentList = comments.map(comment => `<p>${comment}</p>`).join('');
    res.send(`
        <h1>Commentaires</h1>
        ${commentList}
        <form method="POST" action="/comments">
            <input type="text" name="comment" placeholder="Ajoutez un commentaire" />
            <button type="submit">Soumettre</button>
        </form>
        <br>
        <form method="POST" action="/logout">
            <button type="submit">Se déconnecter</button>
        </form>
    `);
});

// Route pour soumettre un commentaire
app.post('/comments', isAuthenticated, (req, res) => {
    comments.push(req.body.comment); // Ne filtre pas l'entrée de l'utilisateur
    res.redirect('/comments');
});

// Route pour se déconnecter
app.post('/logout', (req, res) => {
    req.session.destroy(() => {
        res.redirect('/login');
    });
});

// Lancement du serveur
app.listen(3000, () => {
    console.log('Serveur en cours d\'exécution sur http://localhost:3000');
});
