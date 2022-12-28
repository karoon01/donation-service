const { Router } = require('express');
const {
    signIn,
    signUp,
    refreshAccessToken,
} = require('../controllers/auth.controller');

const authRouter = Router({ mergeParams: true });

authRouter.post('/register', signUp);
authRouter.post('/login', signIn);
authRouter.post('/refresh', refreshAccessToken);

module.exports = authRouter;
