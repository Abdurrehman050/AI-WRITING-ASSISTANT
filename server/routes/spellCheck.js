const express = require("express");
const spellCheckRoute = express.Router();

spellCheckRoute.post("/", async (req, res) => {
  res.json({
    message: "spell check route",
  });
});

// export
module.exports = spellCheckRoute;
