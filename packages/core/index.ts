import { middlewares } from "./middlewares/index";
import Koa from "koa";
import Compiler from "./Compiler";
import Loader from "./Loader";

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
  start() {
    this.listen(3333, "", () => {
      console.log(`✅💫 [Rendre] listening at port 3333 `);
    });
  }
  applyMiddleware() {
    this.use(middlewares);
  }
  async compile() {
    await this.Compiler.compile();
  }
  async launch() {
    await this.compile();
    this.start();
  }
}

export default Rendre;
