import { execa } from "execa";

const tryCatchWrap = async (cb: () => void) => {
  try {
    await cb();
  } catch (error) {
    console.log(error);
  }
};
(async () => {
  tryCatchWrap(() =>
    execa("vite", ["build"], {
      cwd: __dirname,
    })
  );
  console.log("success: 打包产物完成!");

  tryCatchWrap(() =>
    execa("tsx", ["watch", "./src/server/index.ts"], {
      cwd: __dirname,
    })
  );
  console.log("success: 运行入口文件!");
})();
