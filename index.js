const express = require("express");
const app = express();
const PORT = 3000;
const route = require("./app/routes/routes");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(route);

app.listen(PORT, () => {
  console.log(`Server running on port: `, PORT);
});
