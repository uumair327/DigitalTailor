  const logoutButton = document.querySelector("#logout-button");

  logoutButton.addEventListener("click", () => {
    firebase.auth().signOut().then(() => {
      // Sign-out successful. Redirect to userpage.html.
      window.location.href = "userpage.html";
    }).catch((error) => {
      // An error happened.
      console.error("Logout Error:", error);
    });
  });