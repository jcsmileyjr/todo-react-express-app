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

// TODO: Route to update a TODO object
router.put("/updateTODO", (req, res) => {
  res.status(200).send(req.body);
});

// TODO: Rout to delete a TODO object

module.exports = router;
