let express = require("express");
let router = express.Router();
let developmentData = require("../development-data/dummyData.json");

// Route to check heartbeat
router.get("/heartbeat", (req, res) => {
  res.send("It works");
});

// route to get array of TODO objects
router.get("/data", (req, res) => {
  res.send(JSON.stringify(developmentData));
});

// TODO: Route to update the TODO list from updated TODOs and deleted TODOs
router.post("/updateTODO", (req, res) => {
  developmentData = req.body;
  console.log("dev data", developmentData);
  res.status(200).send(req.body);
});

module.exports = router;
