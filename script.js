document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const form = document.getElementById('contact-form');

    // Theme toggle functionality
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
    });

    // Load saved theme
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
    }

    // Form submission handling
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Message sent! (This is a demo, no actual submission occurs.)');
            form.reset();
        });
    }
});