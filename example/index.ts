import path from "node:path";
import express from "express";
import { getTemplateHtml } from "./utils/getTemplateHtml";
import Rendre from "rendre";

const toAbsolute = (relativePath: string) =>
  path.resolve(__dirname, relativePath);

// const app = express();

// app.use(express.static(toAbsolute("./dist")));

// app.use("*", async (req, res, next) => {
//   const url = req.originalUrl;
//   // @ts-ignore
//   const render = (await import("./dist/entry-server.js")).render;
//   const ctx = await fakeContext();
//   const appHtml = render(url, ctx);
//   res
//     .status(200)
//     .set({ "Content-Type": "text/html" })
//     .end(getTemplateHtml(appHtml, ctx));
// });

// app.listen(3333, () => {
//   console.log(`Listening at port 3333...`);
// });

// const fakeContext = () =>
//   new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({
//         name: "xhj",
//         age: 20,
//       });
//     }, 1000);
//   });

const rendre = new Rendre({
  entryDir: toAbsolute(""),
});
// rendre.run();
