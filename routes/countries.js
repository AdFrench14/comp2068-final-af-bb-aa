// Our router module
const router = require('express').Router();

// Our controller
const CountriesController = require('../controllers/countriesController');

// Our routes
router.get(`/`, CountriesController.index);
router.get(`/:id`, CountriesController.show);
router.post(`/`, CountriesController.create);
router.post(`/update`, CountriesController.update);
router.post(`/destroy`, CountriesController.destroy);

// We have to export our changes
module.exports = router;