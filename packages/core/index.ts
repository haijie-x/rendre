import { renderToNodeStream } from "react-dom/server";
import Koa from "koa";
import Compiler from "./Compiler";
import Loader from "./Loader";
import createReadStream from "./utils/createReadStream";
import React from "react";

type Options = {
  entryDirname: string;
  buildDirname: string;
};

class Rendre extends Koa {
  private defaultConfig = {};

  private config: {
    compileConfig?: any;
  } = {};

  private Compiler: any;
  private Loader: any;

  constructor(options: Options) {
    super();
    this.config.compileConfig = Object.assign({}, this.defaultConfig, options);

    this.Compiler = new Compiler(this);

    this.Loader = new Loader(this);

    this.applyMiddleware();
  }
  async launch() {
    await this.compile();
    this.startServer();
  }

  startServer() {
    this.listen(3333, "", () => {
      console.log(`✅💫 [Rendre] listening at port 3333 `);
    });
  }
  loadMiddleware() {
    this.use(async (ctx, next) => {
      const url = ctx.url;
      const viewName = url.replace(/^\/(.+)/, (_, s1) => s1);

      const view = await this.Loader.loadModule(
        viewName,
        ".rendre/server/*.js"
      );
      if (view) {
        ctx.view = view?.default ? view.default : view;
      }
      next();
    });
  }
  renderMiddleware() {
    this.use(async (ctx, next) => {
      const { view } = ctx;
      if (view) {
        ctx.set("Transfer-Encoding", "chunked");
        ctx.res.removeHeader("Content-Length");
        ctx.type = "html";
        const html = renderToNodeStream(React.createElement(ctx.view));
        ctx.body = html;
        // ctx.body = html;
      } else {
        ctx.body = "Not Found 404 ...";
      }
    });
  }
  applyMiddleware() {
    this.loadMiddleware();
    this.renderMiddleware();
  }
  async compile() {
    await this.Compiler.compile();
  }
}

export default Rendre;
