const express = require("express");

const router = express.Router();

const { sayHello } = require("../../controllers/sayAction")

router.get("/", sayHello);

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const programsRouteur = require("./programs/router");

router.use("/programs", programsRouteur );

const itemsRouter = require("./items/router");

router.use("/items", itemsRouter);

/* ************************************************************************* */

module.exports = router;
