const {Router} = require('express');
const {makeDonation, getAllUserDonations} = require('../controllers/donation.controller');
const {authMiddleware, authorize} = require('../middlewares/AuthMiddleware');

const donationRouter = Router({mergeParams: true});

donationRouter.post('/make/:collectionId/:userId', authMiddleware, authorize('BaseUser'), makeDonation);
donationRouter.get('/user/:userId',authMiddleware, authorize(), getAllUserDonations);

module.exports = donationRouter;