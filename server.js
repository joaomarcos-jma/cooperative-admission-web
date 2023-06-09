const express = require("express");
const path = require("path");
const package_name = process.env.npm_package_name;
const app = express();

app.use(express.static(`${__dirname}/dist/${package_name}`));

app.get("/*", (req, res) => {
  res.sendFile(path.join(`${__dirname}/dist/${package_name}/index.html`));
});

app.listen(process.env.PORT || 8080);
