const {Router} = require('express');
const {getUserById, getAllUsers } = require('../controllers/user.controller');
const User = require('../models/User');

const userRouter = Router({ mergeParams: true });

userRouter.get('/', getAllUsers);
userRouter.route('/:id').get(getUserById);

module.exports = userRouter;