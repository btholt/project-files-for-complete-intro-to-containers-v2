const fs = require("fs").promises;
const path = require("path");

const dataPath = path.join(process.env.DATA_PATH || "./data.txt");

fs.readFile(dataPath)
  .then((buffer) => {
    const data = buffer.toString();
    const dataToWrite = +data + 1;
    console.log(`${dataPath} found, incrementing by 1:`, dataToWrite);
    writeTo(dataToWrite);
  })
  .catch((e) => {
    console.log(`file not found, writing "0" to ${dataPath}`);
    writeTo(0);
  });

const writeTo = (data) => {
  fs.writeFile(dataPath, data.toString()).catch(console.error);
};
