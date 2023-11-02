$(document).ready(function () {
    $('#user-section').click(function () {
        window.location.href = '#user-section';
    });
});
document.addEventListener("DOMContentLoaded", function () {
    // Get the user profile dropdown element
    const userProfileDropdown = document.querySelector("#userProfileDropdown");

    // Get the dropdown menu element
    const userProfileMenu = document.querySelector(".dropdown-menu");

    // Toggle the dropdown menu when the user profile image is clicked
    userProfileDropdown.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent default link behavior
      userProfileMenu.classList.toggle("show");
    });

    // Close the dropdown menu when clicking outside of it
    window.addEventListener("click", function (event) {
      if (
        userProfileMenu.classList.contains("show") &&
        event.target !== userProfileDropdown &&
        !userProfileDropdown.contains(event.target) &&
        event.target !== userProfileMenu &&
        !userProfileMenu.contains(event.target)
      ) {
        userProfileMenu.classList.remove("show");
      }
    });
  });
  function showUserInterface() {
    document.getElementById('user-section').style.display = 'block';
    document.getElementById('tailor-section').style.display = 'none';
  }

  function showTailorInterface() {
    document.getElementById('user-section').style.display = 'none';
    document.getElementById('tailor-section').style.display = 'block';
  }