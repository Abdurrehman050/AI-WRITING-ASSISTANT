const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const analyzeRoute = require("./routes/analyze");
const grammarCheckRoute = require("./routes/grammarcheck");
const spellCheckRoute = require("./routes/spellCheck");
const PORT = process.env.PORT || 8000;

// Middleware
app.use(cors()); //prevent CORS errors
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// Routes
app.use("/api/analyze", analyzeRoute);
app.use("/api/grammarcheck", grammarCheckRoute);
app.use("/api/spellcheck", spellCheckRoute);

// start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
