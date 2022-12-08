const {Router} = require('express');
const {getUserById, getAllUsers, updateUser } = require('../controllers/user.controller');
const authMiddleware = require('../middlewares/AuthMiddleware');

const userRouter = Router({ mergeParams: true });

userRouter.get('/', getAllUsers);
userRouter.route('/:id').get(authMiddleware, getUserById).patch(authMiddleware, updateUser);

module.exports = userRouter;