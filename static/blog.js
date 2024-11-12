document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function(event) {
        // for redirects
        window.location.href = this.href;
    });
});
