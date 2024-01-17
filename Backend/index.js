const express = require("express");
const app = express();
const port = 3001;
const cors = require("cors");
app.use(cors());
const router = require("./src/router/productsRouter");
const dbConnect = require("./src/config/db");
dbConnect();
app.use(express.json());
app.use("/", router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
