const {Router} = require('express');
const {signIn, signUp} = require('../controllers/auth.controller');

const authRouter = Router({ mergeParams: true });

authRouter.post('/register', signUp);
authRouter.post('/login', signIn);

module.exports = authRouter;