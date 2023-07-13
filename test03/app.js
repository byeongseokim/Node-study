const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();

// Add the cookie-parser middleware
app.use(cookieParser());

app.get("/:data", (req, res) => {
  const { data } = req.params;
  const jsonData = parseData(data);
  res.json(jsonData);
});

function parseData(data) {
  const keyValuePairs = data.split("&");
  const jsonData = {};

  for (const pair of keyValuePairs) {
    const [key, value] = pair.split("=");
    jsonData[key] = value;
  }

  return jsonData;
}

app.listen(3000, () => {
  console.log("3000 번 포트에서 대기중 입니다.");
});
