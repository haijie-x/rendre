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
    execa("vite", ["build", "vite.config.client.ts"], {
      cwd: __dirname,
    })
  );
  console.log("success: client打包完成!");

  tryCatchWrap(() =>
    execa("vite", ["build", "vite.config.server.ts"], {
      cwd: __dirname,
    })
  );
  console.log("success: server打包完成!");

  // tryCatchWrap(() =>
  //   execa("tsx", ["watch", "./src/server/index.ts"], {
  //     cwd: __dirname,
  //   })
  // );
  // console.log("success: 运行入口文件!");
})();
