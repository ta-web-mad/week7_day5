const router = require("express").Router();
const coastersRouter = require('./coaster.routes')
const authRouter = require('./auth.routes')


router.use("/coasters", coastersRouter);
router.use("/auth", authRouter);

// You put the next routes here 👇
// example: router.use("/auth", authRoutes)

module.exports = router;
