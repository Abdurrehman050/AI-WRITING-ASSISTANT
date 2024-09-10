const express = require("express");
const analyzeRoute = express.Router();

analyzeRoute.post("/", async (req, res) => {
  res.json({
    message: "analyze route",
  });
});

// export
module.exports = analyzeRoute;
