// Custom cursor
document.addEventListener('mousemove', (e) => {
    const cursor = document.querySelector('.custom-cursor');
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.querySelector('.sidebar');
    const menuToggle = document.createElement('button');
    menuToggle.classList.add('menu-toggle');
    menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    document.body.appendChild(menuToggle);

    menuToggle.addEventListener('click', () => {
        sidebar.classList.toggle('active');
    });
});

