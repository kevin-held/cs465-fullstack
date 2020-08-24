var express = require('express');
var router = express.Router();
const jwt = require('express-jwt');
const auth = jwt({
    secret: process.env.JWT_SECRET,
    userProperty: 'payload',
    algorithms: ['sha512'] 
});
const ctrlAuth = require('../controllers/authentication');
const ctrlTrips = require('../controllers/trips');

/* GET trips */
router
    .route('/trips')
    .get(ctrlTrips.tripsList)
    .post(auth, ctrlTrips.tripsAddTrip);

/* GET single trip */
router
    .route('/trips/:tripCode')
    .get(ctrlTrips.tripsFindByCode)
    .put(auth, ctrlTrips.tripsUpdateTrip);

/* POST auth */
router
    .route('/login')
    .post(ctrlAuth.login);

router
    .route('/register')
    .post(ctrlAuth.register);

module.exports = router;
