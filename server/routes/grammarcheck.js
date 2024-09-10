const express = require("express");
const grammarCheckRoute = express.Router();

grammarCheckRoute.post("/", async (req, res) => {
  res.json({
    message: "grammer check route",
  });
});

// export
module.exports = grammarCheckRoute;
