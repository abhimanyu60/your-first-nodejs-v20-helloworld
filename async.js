// 定义一个异步函数
async function main() {
  console.dir("hi async function");
  try {
    // 调用Promise函数
    await fn();
  } catch (error) {
    console.log(error);
  }
}

// 调用Promise函数
function fn() {
  return new Promise(function (resolve, reject) {
    console.dir("hi promise function");
    resolve();
  });
}

// 调用异步函数
main();
