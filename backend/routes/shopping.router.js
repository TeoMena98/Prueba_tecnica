const { Router } = require("express");

const {
  shoppingGet,
  shoppingPost,
  shoppingPut,
  shoppingRemove,
} = require("../controllers/shopping.controller.js");

const router = Router();

router.get("/", [], shoppingGet);
router.post("/", [], shoppingPost);
router.put("/:id", [], shoppingPut);
router.delete("/:id", [], shoppingRemove);

module.exports = router;
