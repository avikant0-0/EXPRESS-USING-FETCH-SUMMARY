const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const PORT = 3000;
somefunction = (name) => {
  return new Promise((resolve) => {
    // Do some processing with the name (you can replace this with your actual logic)
    const processedData = {
      message: "received",
      name: name,
    };

    // Resolve the promise with the processed data
    resolve(processedData);
  });
};

app.post("/recievedata", (req, res) => {
  console.log(req.body);
  const body = req.body;
  somefunction(body.name).then((data) => {
    res.json(data);
  });
});

app.get("/getsomedata", (req, res) => {
  somefunction().then((data) => {
    res.json(data);
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
