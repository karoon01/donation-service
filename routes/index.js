const {Router} = require('express');
const authRouter = require('auth.router');
const userRouter = require('user.router');

const rootRouter = Router({mergeParams: true});

rootRouter.use('/auth', authRouter);
rootRouter.use('/user', userRouter);

module.exports = rootRouter;