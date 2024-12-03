document.addEventListener('DOMContentLoaded', () => {
    // Function to apply dark mode (localStorage)
    function applyDarkMode() {
        if (localStorage.getItem('darkMode') === 'enabled') {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }

    // Apply dark mode on page load
    applyDarkMode();

    // Get the checkbox element for dark mode toggle
    const darkModeSwitch = document.getElementById('dark-mode-toggle');

    // Update toggle state
    if (darkModeSwitch) {
        darkModeSwitch.checked = localStorage.getItem('darkMode') === 'enabled';
        // Event listener to toggle dark mode
        darkModeSwitch.addEventListener('change', () => {
            if (darkModeSwitch.checked) {
                localStorage.setItem('darkMode', 'enabled');
                document.body.classList.add('dark-mode');
            } else {
                localStorage.setItem('darkMode', 'disabled');
                document.body.classList.remove('dark-mode');
            }
        });
    }

    // Hamburger menu toggle
    const hamburgerMenuButton = document.querySelector('.hamburger');
    const menuList = document.querySelector('nav ul');

    if (hamburgerMenuButton && menuList) {
        // Event listener to toggle the menu visibility
        hamburgerMenuButton.addEventListener('click', () => {
            menuList.classList.toggle('active');
            hamburgerMenuButton.classList.toggle('active');
        });
    }
});
