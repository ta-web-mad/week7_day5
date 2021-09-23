const router = require("express").Router();
const coastersRouter = require('./coaster.routes')


router.use("/coasters", coastersRouter);

// You put the next routes here 👇
// example: router.use("/auth", authRoutes)

module.exports = router;
