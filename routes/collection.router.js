const {Router} = require('express');
const authMiddleware = require('../middlewares/AuthMiddleware');
const {
    showAllCollectionDonations,
    showAllCollections,
    createCollection,
    updateCollection,
    endCollection} = require('../controllers/collection.controller');

const collectionRouter = Router({mergeParams: true});

collectionRouter.get('/:collectionId', showAllCollectionDonations);
collectionRouter.get('/all', showAllCollections);
collectionRouter.post('/create', createCollection);
collectionRouter.patch('/update/:collectionId', updateCollection);
collectionRouter.patch('/end/:collectionId', endCollection);
//TODO: add auth/role middlewares

module.exports = collectionRouter;