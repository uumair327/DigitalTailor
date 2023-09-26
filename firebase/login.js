// login.js
// Initialize Firestore
const loginDB = firebase.firestore();

// Handle user login
const loginForm = document.getElementById('login-form');
const alertMessage = document.getElementById('alert-message');
const loadingSpinner = document.getElementById('loading-spinner');
const loginButton = document.getElementById('login-button');

loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const username = loginForm['username'].value;
    const password = loginForm['password'].value;

    // Show loading spinner and hide login button
    console.log("Login button clicked."); // Add this line
    showLoading();

    try {
        // Sign in user with Firebase Authentication
        await firebase.auth().signInWithEmailAndPassword(username, password);

        // Redirect to the user dashboard or desired page upon successful login
        window.location.href = 'index.html';
    } catch (error) {
        // Log the error to the console to see the actual error code
        console.error("Login error:", error);

        // Handle login errors
        switch (error.code) {
            case "auth/user-not-found":
                showAlert("User not found. Please check your credentials.");
                break;
            case "auth/wrong-password":
                showAlert("Incorrect password. Please try again.");
                break;
            default:
                showAlert("An error occurred. Please try again later.");
                break;
        }
    } finally {
        // Hide loading spinner and show login button
        hideLoading();
    }
});

// Function to show a message in the feedback area
function showAlert(message) {
    alertMessage.innerText = message;
    alertMessage.style.display = "block";
}

// Function to show the loading spinner and hide the login button
function showLoading() {
    loadingSpinner.style.display = "block";
    loginButton.style.display = "none";
}

// Function to hide the loading spinner and show the login button
function hideLoading() {
    loadingSpinner.style.display = "none";
    loginButton.style.display = "block";
}
