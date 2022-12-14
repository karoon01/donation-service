const {Router} = require('express');
const {makeDonation, getAllUserDonations} = require('../controllers/donation.controller');
const authMiddleware = require('../middlewares/AuthMiddleware');

const donationRouter = Router({mergeParams: true});

donationRouter.route('/make/:collectionId/:userId').post(authMiddleware, makeDonation);
donationRouter.get('/user/:userId', getAllUserDonations);
//TODO: add auth/role middlewares

module.exports = donationRouter;