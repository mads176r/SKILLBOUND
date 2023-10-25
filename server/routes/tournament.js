const express = require('express');
const router = express.Router();
const tournamentsController = require('../controllers/tournamentsController');

// Define your tournament-related routes using the controller functions
router.get('/', tournamentsController.listTournaments);
router.get('/:id', tournamentsController.getTournament);
router.post('/', tournamentsController.createTournament);
// Add more routes for update and delete using similar controller functions

module.exports = router;
