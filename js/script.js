document.addEventListener('DOMContentLoaded', () => {
    // Function to apply dark mode based on localStorage
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

    // Update toggle state to reflect the current mode
    if (darkModeSwitch) {
        darkModeSwitch.checked = localStorage.getItem('darkMode') === 'enabled';

        // Add event listener to toggle dark mode
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

    // Hamburger menu toggle functionality
    const hamburgerMenuButton = document.querySelector('.hamburger');  // Changed from '.hamburger-menu'
    const menuList = document.querySelector('nav ul');

    if (hamburgerMenuButton && menuList) {
        // Add event listener to toggle the menu visibility
        hamburgerMenuButton.addEventListener('click', () => {
            menuList.classList.toggle('active'); // Use 'active' class to show the menu
            hamburgerMenuButton.classList.toggle('active'); // Optional: Animate the hamburger button
        });
    }
});
