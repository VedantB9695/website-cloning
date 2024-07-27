document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-text');
    const searchButton = document.querySelector('button');
    const contentElements = document.querySelectorAll('.content');

    searchButton.addEventListener('click', () => {
        const query = searchInput.value.toLowerCase();

        contentElements.forEach(content => {
            const name = content.querySelector('.name span').textContent.toLowerCase();
            if (name.includes(query)) {
                content.style.display = 'flex';
            } else {
                content.style.display = 'none';
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const themeToggleButton = document.getElementById('theme-toggle');

    themeToggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const menuToggleButton = document.querySelector('.menu-toggle');
    const navbar = document.querySelector('.navbar');

    menuToggleButton.addEventListener('click', () => {
        navbar.classList.toggle('open');
    });
});
