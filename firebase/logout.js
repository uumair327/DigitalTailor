  const logoutButton = document.querySelector("#logout-button");

  logoutButton.addEventListener("click", () => {
    firebase.auth().signOut().then(() => {
      // Sign-out successful. Redirect to index.html.
      window.location.href = "index.html";
    }).catch((error) => {
      // An error happened.
      console.error("Logout Error:", error);
    });
  });