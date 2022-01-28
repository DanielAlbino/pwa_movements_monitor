const express = require("express");
const router = express.Router();

router.post("/", () => {
  console.log("posting data");
});
router.get("/", () => {
  console.log("getting data");
});

module.exports = router;
