// Our Express app module
const express = require('express');
const app = express();

// Importing the pageRoutes
const countryRoutes = require('./routes/countries');

// Registering our pageRoutes
// app.use('/', pageRoutes);
app.use('/countries', countryRoutes);

// Exporting the changes
module.exports = app;