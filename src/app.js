const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.static("dist"));
app.get("*", (_, res) => {
  res.redirect("/404");
});
app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));