import Koa from "koa";
import Router from "koa-router";
import React from "react";
import { renderToString } from "react-dom/server";
const app = new Koa();
const router = new Router();

router.get("/", (ctx) => {
  ctx.response.type = "html";
  const html = renderToString(
    React.createElement("h1", { children: ["HELLO,WORLD"] })
  );
  ctx.response.body = html;
});

app.use(router.routes());

app.listen(3333);
console.log("SSR服务启动!");
