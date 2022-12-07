const {Router} = require("express");
const {signIn, signUp} = require("../controllers/auth.controller")

const authRouter = Router({ mergeParams: true });

authRouter.post("/register", signIn);

authRouter.post("/login", signUp);

module.exports = authRouter;