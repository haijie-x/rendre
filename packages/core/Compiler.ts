import webpack from "webpack";
type Options = any;

class Compiler {
  private defaultConfig = {
    mode: "development",
    module: {
      rules: this.getWebpackLoaderConf(),
    },
  };
  private compileConfig: any;

  constructor(rendreVo: any) {
    this.compileConfig = Object.assign({}, this.defaultConfig, {
      entry: {
        home: rendreVo.compileConfig.entryDirname + "/pages/Home.jsx",
        List: rendreVo.compileConfig.entryDirname + "/pages/List.jsx",
      },
      output: {
        path: rendreVo.compileConfig.entryDirname + "/bundle",
        filename: "[name].bundle.js",
        libraryTarget: "commonjs2",
      },
    });
  }
  async compile() {
    return new Promise((resolve, reject) => {
      webpack(this.compileConfig, this.errorHandler(resolve, reject));
    });
  }
  errorHandler(
    resolve: (value?: unknown) => void,
    reject: (reason?: any) => void
  ) {
    return (err: any, stats: any) => {
      if (err) {
        console.error(err.stack || err);
        if (err.details) {
          console.error(err.details);
        }
        reject();
        process.exit(1);
      }
      const info = stats.toJson();
      if (stats.hasErrors()) {
        console.log("-----Finished running webpack with errors-----");
        info.errors.forEach((e: any) => console.error(e));
        reject();
        process.exit(1);
      } else {
        console.log("-----Finished running webpack-----");
        resolve();
      }
    };
  }
  getWebpackLoaderConf() {
    const babelLoaderConf = {
      // 指定加载器
      loader: "babel-loader",
      options: {
        presets: ["@babel/preset-env", "@babel/preset-react"],
      },
    };

    return [
      {
        test: /\.(ts|tsx)$/,
        use: [
          // 配置babel
          babelLoaderConf,
          "ts-loader",
        ],
      },
      {
        test: /\.(js|jsx)$/,
        use: [babelLoaderConf],
      },
    ];
  }
}
export default Compiler;
