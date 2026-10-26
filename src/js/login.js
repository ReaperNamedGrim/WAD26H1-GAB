document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('.login-form');

    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault(); // prevent default GET form submission
            
            const emailInput = document.querySelector('input[name="email"]').value;
            const nameInput = document.querySelector('input[name="name"]').value;

            // store user info in localStorage
            const userData = {
                name: nameInput,
                email: emailInput
            };
            localStorage.setItem('user', JSON.stringify(userData));

            // back to homepage
            window.location.href = './index.html';
        });
    }
});