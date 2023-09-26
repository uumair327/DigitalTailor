// Initialize Firestore
const registrationDB = firebase.firestore();

// Function to check if a username is already taken
async function checkUsernameAvailability(username) {
    const usersCollection = registrationDB.collection('users');
    const querySnapshot = await usersCollection.where('username', '==', username).get();

    return !querySnapshot.empty; // Return true if username exists, false otherwise
}

// ...

const registrationForm = document.getElementById('register-form');
const alertMessage = document.getElementById('alert-message');
const loadingSpinner = document.getElementById('loading-spinner');
const registerButton = document.getElementById('register-button'); // Add this line

registrationForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const username = registrationForm['username'].value;
    const email = registrationForm['email'].value;
    const password = registrationForm['password'].value;
    const confirmPassword = registrationForm['confirmPassword'].value;

    if (password !== confirmPassword) {
        showAlert("Passwords do not match!");
        return;
    }

    try {
        // Show loading spinner and hide register button
        showLoading();

        // Check if the username is already taken
        const usernameExists = await checkUsernameAvailability(username);

        if (usernameExists) {
            showAlert("Username already exists. Please choose a different username.");
            return;
        }

        // Create a new user account with Firebase Authentication
        const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
        const user = userCredential.user;

        // Store additional user data in Firestore
        await registrationDB.collection('users').doc(user.uid).set({
            username: username,
            email: email
            // Add more user data as needed
        });

        // Redirect to the login page upon successful registration
        window.location.href = 'login.html';
    } catch (error) {
        showAlert(error.message);
    } finally {
        // Hide loading spinner and show register button
        hideLoading();
    }
});

// Function to show a message in the feedback area
function showAlert(message) {
    alertMessage.innerText = message;
    alertMessage.style.display = "block";
}

// Function to show the loading spinner and hide the register button
function showLoading() {
    loadingSpinner.style.display = "block";
    registerButton.style.display = "none";
}

// Function to hide the loading spinner and show the register button
function hideLoading() {
    loadingSpinner.style.display = "none";
    registerButton.style.display = "block";
}