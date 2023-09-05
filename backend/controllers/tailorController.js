const Tailor = require('../models/tailorModel');

exports.renderTailorDashboard = (req, res) => {
  // Your logic to render the tailor dashboard
  res.render('tailor/dashboard', { pageTitle: 'Tailor Dashboard' });
};

exports.viewCustomerMeasurements = (req, res) => {
  // Your logic to view and process customer measurement requests
  // Example: Retrieve measurements from the database and render them
  Tailor.findById(req.params.id)
    .then(tailor => {
      // Render tailor's measurement requests view
      res.render('tailor/view_measurements', { tailor });
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('An error occurred');
    });
};

exports.viewDesignRequests = (req, res) => {
  // Your logic to view and process design requests
  // Example: Retrieve design requests from the database and render them
  Tailor.findById(req.params.id)
    .then(tailor => {
      // Render tailor's design requests view
      res.render('tailor/view_designs', { tailor });
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('An error occurred');
    });
};
.
