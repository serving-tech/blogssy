Blogssy - A Responsive Blog Website
Blogssy is a modern, responsive blog website built with HTML5, CSS, and JavaScript. It features a clean design, semantic structure, and interactive elements like a theme toggle and a contact form. The website includes multiple pages (Home, About, Contact, and Blog Post) with consistent navigation and a professional aesthetic.
Features

Semantic HTML5: Utilizes elements like <header>, <nav>, <main>, <article>, <section>, <footer>, and <time> for accessibility and structure.
Responsive Design: Adapts seamlessly to various screen sizes (desktop, tablet, mobile) using CSS media queries.
Modern Styling: Includes gradient headers, smooth animations, hover effects, box shadows, and the 'Inter' font for a polished look.
JavaScript Interactivity:
Dark/light theme toggle with localStorage persistence.
Contact form with client-side validation and demo submission feedback.


Modular Code: Separates HTML, CSS, and JavaScript into distinct files for maintainability.
Cross-Page Navigation: Consistent navigation across all pages (Home, About, Contact, Post).

Project Structure
blogssy/
├── index.html          # Homepage
├── about.html          # About page
├── contact.html        # Contact page
├── post.html           # Blog post page
├── styles.css          # Shared CSS styles
├── script.js           # Shared JavaScript functionality
└── README.md           # Project documentation

Setup Instructions

Clone or Download:
Clone the repository or download the project files to your local machine.


File Placement:
Ensure all files (index.html, about.html, contact.html, post.html, styles.css, script.js) are in the same directory.


Run the Website:
Open index.html in a web browser to view the homepage.
Navigate to other pages using the navigation bar.


Test Features:
Use the "Toggle Theme" button to switch between light and dark modes.
Submit the contact form on the Contact page to see the demo alert.



No external dependencies or server setup is required, as the website runs entirely on the client side.
Deployment
The website can be deployed to any static hosting service (e.g., GitHub Pages, Netlify, Vercel). Upload all files to the hosting platform and access the site via the provided URL.
Deployment Link: [https://blogssy.netlify.app/]
Usage

Home Page: Displays a welcome message and two sample blog post previews with "Read More" links.
About Page: Provides information about the blog creator.
Contact Page: Includes a form for users to send messages (demo alert on submission).
Blog Post Page: Shows a full sample blog post with a title, date, and content.
Theme Toggle: Click the "Toggle Theme" button to switch between light and dark modes, with the preference saved in localStorage.

Technologies Used

HTML5: For semantic structure and content.
CSS: For styling, animations, and responsive design.
JavaScript: For interactivity (theme toggle, form handling).
Fonts: 'Inter' font from Google Fonts for typography.
