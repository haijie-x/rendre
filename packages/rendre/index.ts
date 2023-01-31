import Koa from "koa";
import KoaStatic from "koa-static";
type Options = {
  entryDir: string;
};

class Rendre extends Koa {
  private defaultConfig = {};
  constructor(options: Options) {
    super();
    const config = Object.assign({}, this.defaultConfig, options);
    const { entryDir } = config;

    this.use(KoaStatic(entryDir + "/dist"));
    this.use((ctx) => {
      console.log(ctx.url);
      ctx.body = "Hello,Rendre";
      // const url = req.originalUrl;
      // // @ts-ignore
      // const render = (await import("./dist/entry-server.js")).render;
      // const ctx = await fakeContext();
      // const appHtml = render(url, ctx);
      // res
      //   .status(200)
      //   .set({ "Content-Type": "text/html" })
      //   .end(getTemplateHtml(appHtml, ctx));
    });
  }
  run() {
    this.listen(3333, "", () => {
      console.log(`Listening at port 3333...`);
    });
  }
}

export default Rendre;