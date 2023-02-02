import Koa from "koa";
import KoaStatic from "koa-static";
import Compiler from "./Compiler";
import Loader from "./Loader";

type Options = {
  entryDirname: string;
  buildDirname: string;
};

class Rendre extends Koa {
  private defaultConfig = {};
  private compileConfig: any;

  private config: any;
  private Compiler: any;
  private Loader: any;

  constructor(options: Options) {
    super();
    const config = (this.config = Object.assign(
      {},
      this.defaultConfig,
      options
    ));
    this.compileConfig = {
      entryDirname: config.entryDirname,
    };

    this.Compiler = new Compiler(this);

    this.Loader = new Loader(this);

    // this.use(KoaStatic(entryDir + "/dist"));
    // this.use((ctx) => {
    //   console.log(ctx.url);
    //   ctx.body = "Hello,Rendre";
    // const url = req.originalUrl;
    // // @ts-ignore
    // const render = (await import("./dist/entry-server.js")).render;
    // const ctx = await fakeContext();
    // const appHtml = render(url, ctx);
    // res
    //   .status(200)
    //   .set({ "Content-Type": "text/html" })
    //   .end(getTemplateHtml(appHtml, ctx));
    // });
  }
  async launch() {
    await this.compile();
    this.Loader.loadModule("home");
    this.startServer();
  }

  startServer() {
    this.listen(3333, "", () => {
      console.log(`Listening at port 3333...`);
    });
  }

  async compile() {
    await this.Compiler.compile();
  }
}

export default Rendre;
