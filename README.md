# Travaux Pratiques sur les Vulnérabilités XSS

Ce dépôt contient une série de travaux pratiques destinés à comprendre et explorer les différentes formes de vulnérabilités Cross-Site Scripting (XSS). Chaque TP propose une application web volontairement vulnérable pour des fins éducatives.

## Structure du Dépôt

Le dépôt est organisé en trois sections principales, chacune couvrant un type spécifique d'attaque XSS :

### 1. XSS DOM-Based (`/xssDOMBased/`)
- Démonstration des vulnérabilités XSS basées sur le DOM
- Comprend un serveur vulnérable et un serveur attaquant
- Focus sur la manipulation dynamique du DOM via JavaScript

### 2. XSS Reflected (`/xssReflected/`)
- Exploration des attaques XSS réfléchies
- Montre comment les entrées utilisateur non sécurisées peuvent être immédiatement renvoyées au navigateur
- Démontre l'importance de la validation des entrées côté serveur

### 3. XSS Stored (`/xssStored/`)
- Illustration des attaques XSS persistantes
- Exemple de stockage de données malveillantes dans une base de données
- Impact sur plusieurs utilisateurs via du contenu persistant

## Prérequis Généraux

- Node.js et npm installés
- Navigateur web moderne
- Connaissances de base en :
  - HTML et JavaScript
  - Sécurité web
  - Protocole HTTP

## Installation

1. Cloner le dépôt :
```bash
git clone https://github.com/bouhenic/xss.git
cd xss
```

2. Chaque sous-dossier contient son propre README avec des instructions spécifiques pour :
   - L'installation des dépendances
   - Le lancement des serveurs
   - Les étapes du TP

## Objectifs Pédagogiques

- Comprendre les différents types d'attaques XSS
- Apprendre à identifier les vulnérabilités
- Maîtriser les techniques de prévention
- Développer de bonnes pratiques de sécurité

## Avertissement de Sécurité

⚠️ Ces applications sont volontairement vulnérables à des fins éducatives. Ne pas déployer en production. À utiliser uniquement dans un environnement de test contrôlé.

## Ressources Complémentaires

- [OWASP XSS Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html)
- [MDN Web Security](https://developer.mozilla.org/en-US/docs/Web/Security)
- [OWASP Top 10](https://owasp.org/www-project-top-ten/)

## Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :
- Signaler des bugs
- Proposer des améliorations
- Ajouter de nouveaux exemples
- Améliorer la documentation

## Licence

Ce projet est destiné à des fins éducatives et de formation.