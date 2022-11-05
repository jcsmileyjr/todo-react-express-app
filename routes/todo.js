let express = require("express");
let router = express.Router();
let developmentData = require("../development-data/dummyData.json");

router.get("/heartbeat", (req, res) => {
  res.send("It works");
});

router.get("/data", (req, res) => {
  res.send(JSON.stringify(developmentData));
});

module.exports = router;
