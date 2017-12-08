const express = require("express");
const cors = require("cors");
const { json } = require("body-parser");
const controller = require("./controllers/control.js");

const app = express();
const port = 3001;

app.use(cors());
app.use(json());

app.post("/api/getApiData", controller.getApiData);

app.listen(port, () => {
    console.log(`Listening on port ${port}.`);
});
