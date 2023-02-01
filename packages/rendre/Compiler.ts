import webpack from "webpack";
type Options = any;

class Compiler {
  compileConfig: any;

  constructor(options: Options) {
    const defaultConfig: any = {
      mode: "development",
      entry: {
        index: "index.ts",
      },
      output: {
        filename: "[name].bundle.js",
      },
      module: {
        rules: [
          {
            test: /\.(ts|tsx)$/,
            use: [
              // 配置babel
              {
                // 指定加载器
                loader: "babel-loader",
                options: {
                  presets: ["@babel/preset-env", "@babel/preset-react"],
                },
              },
              "ts-loader",
            ],
          },
          {
            test: /\.(js|jsx)$/,
            use: [
              // 配置babel
              {
                // 指定加载器
                loader: "babel-loader",
                options: {
                  presets: ["@babel/preset-env", "@babel/preset-react"],
                },
              },
            ],
          },
        ],
      },
    };
    this.compileConfig = Object.assign({}, defaultConfig, options);
  }
  compile() {
    webpack(this.compileConfig, this.errorHandler());
  }
  errorHandler() {
    return (err: any, stats: any) => {
      if (err) {
        console.error(err.stack || err);
        if (err.details) {
          console.error(err.details);
        }
        process.exit(1);
      }
      const info = stats.toJson();
      if (stats.hasErrors()) {
        console.log("Finished running webpack with errors.");
        info.errors.forEach((e: any) => console.error(e));
        process.exit(1);
      } else {
        console.log("Finished running webpack.");
      }
    };
  }
}
export default Compiler;
