const fs = require("fs");
const path = require("path");

const data = [];

function readFile(filePath) {
  const state = fs.statSync(filePath);
  if (state.isFile()) {
    console.log(filePath, "1234");
    if (path.extname(filePath) === ".json") {
      const json = fs.readFileSync(filePath);
      data.push(...JSON.parse(json));
    }
    console.log(filePath);
  } else if (state.isDirectory()) {
    const files = fs.readdirSync(filePath);
    files.forEach((file) => {
      readFile(path.join(filePath, file));
    });
  }
}

//读取分散的json
readFile("./data");

//写入
fs.writeFileSync("./public/data.json", JSON.stringify(data));
