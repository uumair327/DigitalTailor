const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Error connecting to MongoDB:', err));

const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
// ...

const app = express();

app.use(bodyParser.json());

app.use('/api/auth', authRoutes);
// Include other routes as needed

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
