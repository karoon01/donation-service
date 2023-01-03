const { Router } = require('express');
const {
    getUserById,
    getAllUsers,
    updateUserData,
    changeUserStatus,
    updatePassword,
} = require('../controllers/user.controller');
const { authMiddleware, authorize } = require('../middlewares/AuthMiddleware');

const userRouter = Router({ mergeParams: true });

userRouter.get('/', getAllUsers);
userRouter.get('/:id', authMiddleware, getUserById);
userRouter.patch(
    '/changeStatus/:id',
    authMiddleware,
    authorize('Moderator'),
    changeUserStatus
);
userRouter.patch(
    '/password/update',
    authMiddleware,
    authorize(),
    updatePassword
);
userRouter.patch(
    '/profile/update',
    authMiddleware,
    authorize(),
    updateUserData
);

module.exports = userRouter;
