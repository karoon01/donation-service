const {Router} = require('express');
const authRouter = require('./auth.router');
const userRouter = require('./user.router');
const donationRouter = require('./donation.router');
const collectionRouter = require('./collection.router');

const rootRouter = Router({mergeParams: true});

rootRouter.use('/auth', authRouter);
rootRouter.use('/user', userRouter);
rootRouter.use('/donation', donationRouter);
rootRouter.use('/collection', collectionRouter);

module.exports = rootRouter;