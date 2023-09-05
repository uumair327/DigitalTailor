const User = require('../models/userModel');

exports.renderUserDashboard = (req, res) => {
  // Your logic to render the user dashboard
  res.render('user/dashboard', { pageTitle: 'User Dashboard' });
};

exports.submitMeasurements = (req, res) => {
  // Your logic to handle submitted measurements
  // Example: Save the measurements to the database
  const measurements = req.body;
  User.findByIdAndUpdate(req.user.id, { measurements })
    .then(() => {
      // Redirect back to the dashboard with a success message
      res.redirect('/user/dashboard');
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('An error occurred');
    });
};
.
