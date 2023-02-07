import { PassThrough, Writable } from "node:stream";
import React from "react";
import { renderToPipeableStream, renderToNodeStream } from "react-dom/server";
const renderMiddleware = async (ctx, next) => {
  const { view } = ctx;
  if (view) {
    ctx.set("Transfer-Encoding", "chunked");
    ctx.type = "html";

    const stream = (ctx.body = new PassThrough());

    const nodeStream = new PassThrough();
    renderToPipeableStream(React.createElement(ctx.view)).pipe(nodeStream);

    for await (const chunk of nodeStream) {
      stream.write(chunk);
    }
    stream.end();

    // TODO: following pipe doesn't work & dont know why
    // const { pipe } = renderToPipeableStream(React.createElement(ctx.view), {
    //   onShellReady() {
    //     ctx.status = 200;
    //     ctx.response.set("content-type", "txt/html");
    //     ctx.type = "html";
    //     pipe(ctx.res);
    //     ctx.res.end();
    //   },
    //   onShellError() {
    //     ctx.res.statusCode = 500;
    //   },
    // });
  } else {
    ("<!doctype><p>Error! Not Found!</p>");
  }
};

export default renderMiddleware;
