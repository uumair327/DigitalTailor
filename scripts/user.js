  // Get references to the gender select element and the Get Started button
  const genderSelect = document.getElementById('gender');
  const getStartedButton = document.getElementById('get-started-button');

  // Add a click event listener to the Get Started button
  getStartedButton.addEventListener('click', function (event) {
    // Prevent the default behavior of the link
    event.preventDefault();

    // Get the selected gender value
    const selectedGender = genderSelect.value;

    // Determine the URL based on the selected gender
    let redirectUrl;

    if (selectedGender === 'female') {
      redirectUrl = 'femaleuser.html';
    } 
    // else if (selectedGender === 'male') {
    //   redirectUrl = 'maleuser.html';
    // } 
    else {
      // Handle 'other' or other cases if needed
      redirectUrl = 'maleuser.html';
    }

    // Redirect the user to the appropriate page
    window.location.href = redirectUrl;
  });

