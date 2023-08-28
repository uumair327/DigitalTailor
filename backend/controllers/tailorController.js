// controllers/tailorController.js
const path = require('path');

const renderTailorDashboard = (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'tailor_dashboard.html'));
};

module.exports = { renderTailorDashboard };
