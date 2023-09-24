import fs from "node:fs/promises";

// 使用Promise风格的函数写入文件内容
fs.writeFile("example.txt", "Hello, world!", "utf8")
  .then(() => {
    console.log("File written successfully.");
  })
  .catch((error) => {
    console.error(error);
  });
