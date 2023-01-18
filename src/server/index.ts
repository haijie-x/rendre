import path from "path";
import Koa from "koa";
import Router from "koa-router";
import server from "koa-static";
import React from "react";
import { renderToString } from "react-dom/server";
import { getTemplateHtml } from "../utils/template";
import App from "../__default.app";
import routeList from "../views/index";

const app = new Koa();
const router = new Router();

router.get("/", (ctx) => {
  ctx.response.type = "html";
  const htmlBody = renderToString(React.createElement(App, { routeList }));
  ctx.response.body = getTemplateHtml(htmlBody);
});

app.use(router.routes());
app.use(server(path.resolve(__dirname, "../../dist")));

app.listen(3333);
console.log("SSR服务启动!");
