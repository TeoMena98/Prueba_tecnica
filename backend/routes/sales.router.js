const { Router } = require("express");

const { salesGet } = require("../controllers/sales.controller");

const router = Router();

router.get("/", [], salesGet);

module.exports = router;
