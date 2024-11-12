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

// Teck Stack Add hover effect with mouse tracking
document.querySelectorAll('.tech-icons i').forEach(icon => {
    icon.addEventListener('mousemove', (e) => {
      const bounds = icon.getBoundingClientRect();
      const mouseX = e.clientX - bounds.left;
      const mouseY = e.clientY - bounds.top;
      const centerX = bounds.width / 2;
      const centerY = bounds.height / 2;
      
      const angleX = (mouseY - centerY) / 10;
      const angleY = (centerX - mouseX) / 10;
      
      icon.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) translateZ(10px)`;
    });
    
    icon.addEventListener('mouseleave', () => {
      icon.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
    });
});

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Get all sections and navigation links
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    // Add smooth scrolling behavior to navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Function to update active navigation link
    const updateActiveLink = () => {
        let currentSectionId = '';
        const scrollPosition = window.scrollY;

        // Find the current section based on scroll position
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100; // Offset for better transition
            const sectionHeight = section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSectionId = '#' + section.id;
            }
        });

        // Update active class on navigation links
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === currentSectionId) {
                link.classList.add('active');
            }
        });
    };

    // Add scroll event listener with throttling for better performance
    let isScrolling = false;
    window.addEventListener('scroll', () => {
        if (!isScrolling) {
            window.requestAnimationFrame(() => {
                updateActiveLink();
                isScrolling = false;
            });
            isScrolling = true;
        }
    });

    // Handle mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    
    if (menuToggle && sidebar) {
        menuToggle.addEventListener('click', () => {
            sidebar.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });

        // Close mobile menu when clicking a link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    sidebar.classList.remove('active');
                    menuToggle.classList.remove('active');
                }
            });
        });
    }

    // Initialize active link on page load
    updateActiveLink();
});

// Add CSS for smooth scrolling behavior to the whole page
document.documentElement.style.scrollBehavior = 'smooth';
