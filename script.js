// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        // Scroll to the target section with a smooth animation
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Form Validation
document.querySelector('form').addEventListener('submit', function (e) {
    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const message = document.querySelector('textarea[name="message"]').value;

    // Simple validation to check if fields are empty
    if (!name || !email || !message) {
        e.preventDefault();
        alert("Please fill out all fields before submitting!");
    } else {
        // For now, show a success message and allow form submission
        alert("Your message has been sent! Thank you.");
    }
});

// Highlight the active section in the navigation bar as the user scrolls
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    let scrollPosition = window.scrollY + 150; // Adjust as needed for smoother highlight

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            const id = section.getAttribute('id');
            document.querySelectorAll('nav a').forEach(link => {
                link.classList.remove('active'); // Remove active class from all links
                if (link.getAttribute('href').slice(1) === id) {
                    link.classList.add('active'); // Add active class to the current link
                }
            });
        }
    });
});

// Display alert when clicking on project links (for demo purpose)
document.querySelectorAll('.project a').forEach(projectLink => {
    projectLink.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent actual link navigation
        alert("This is a demo. You will be redirected to the project page soon.");
    });
});
