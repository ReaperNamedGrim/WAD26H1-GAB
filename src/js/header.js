document.addEventListener('DOMContentLoaded', () => {
    const profileIcon = document.getElementById('profile-icon');
    const dropdown = document.getElementById('profile-dropdown');
    const nameElem = document.getElementById('dropdown-name');
    const emailElem = document.getElementById('dropdown-email');
    const logoutBtn = document.getElementById('logout-btn');

    // retrieve user from localStorage
    const storedUser = localStorage.getItem('user');

    profileIcon.addEventListener('click', (e) => {
        if (!storedUser) {
            // Not logged in: allow normal link behavior to redirect to login.html
            return; 
        } else {
            // Logged in: prevent default link behavior and toggle dropdown
            e.preventDefault();
            const user = JSON.parse(storedUser);
            nameElem.textContent = user.name;
            emailElem.textContent = user.email;

            // dropdown visibility
            dropdown.style.display = dropdown.style.display === 'none' ? 'block' : 'none';
        }
    });

    // logout
    if (logoutBtn) {
        logoutBtn.addEventListener('click', (e) => {
            e.preventDefault();
            localStorage.removeItem('user');
            window.location.href = './login.html';
        });
    }
});

