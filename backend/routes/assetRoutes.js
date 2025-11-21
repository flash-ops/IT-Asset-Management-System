const express = require("express");
const { addAsset, getAssets } = require("../controllers/assetController");
const auth = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/add", auth, addAsset);
router.get("/", auth, getAssets);

module.exports = router;
