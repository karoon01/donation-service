const {Router} = require('express');
const {makeDonation, getAllUserDonations} = require('../controllers/donation.controller');
const {authMiddleware, authorize} = require('../middlewares/AuthMiddleware');

const donationRouter = Router({mergeParams: true});

donationRouter.route('/make/:collectionId/:userId').post(authMiddleware, authorize('BaseUser'), makeDonation);
donationRouter.get('/user/:userId',authMiddleware, authorize(), getAllUserDonations);

module.exports = donationRouter;