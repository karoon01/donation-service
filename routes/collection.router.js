const {Router} = require('express');
const {authMiddleware, authorize} = require('../middlewares/AuthMiddleware');
const {
    showAllCollectionDonations,
    showAllCollections,
    createCollection,
    updateCollection,
    endCollection} = require('../controllers/collection.controller');

const collectionRouter = Router({mergeParams: true});

collectionRouter.get('/:collectionId/donations', authMiddleware, authorize(), showAllCollectionDonations);
collectionRouter.get('/all', authMiddleware, authorize(), showAllCollections);
collectionRouter.post('/create', authMiddleware, authorize('Organizer'), createCollection);
collectionRouter.patch('/update/:collectionId', authMiddleware, authorize('Organizer'), updateCollection);
collectionRouter.patch('/end/:collectionId', authMiddleware, authorize('Organizer'), endCollection);

module.exports = collectionRouter;