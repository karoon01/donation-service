const {Router} = require('express');
const {
    getUserById,
    getAllUsers,
    updateUser,
    changeUserStatus,
    updatePassword } = require('../controllers/user.controller');
const {authMiddleware, authorize } = require('../middlewares/AuthMiddleware');

const userRouter = Router({ mergeParams: true });

userRouter.get('/', getAllUsers);
userRouter.route('/:id').get(authMiddleware, getUserById).patch(authMiddleware, authorize(), updateUser);
userRouter.patch('/changeStatus/:id', authMiddleware, authorize('Moderator'), changeUserStatus);
userRouter.patch('/password', authMiddleware, authorize(), updatePassword);

module.exports = userRouter;