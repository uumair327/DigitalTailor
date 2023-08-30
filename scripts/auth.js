document.addEventListener('DOMContentLoaded', function () {
    const registrationForm = document.getElementById('registration-form');

    registrationForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
        } else {
            // Perform registration logic here
            alert(`User registered:\nUsername: ${username}\nEmail: ${email}`);
            registrationForm.reset();
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        if (username === "user" && password === "password") {
            alert("Login successful!");
            // Redirect to dashboard or another page
        } else {
            alert("Invalid credentials. Please try again.");
        }
    });
});
document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();
    // Add your login logic here
});
