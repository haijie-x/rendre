import LRU from "lru-cache";
import { renderToString } from "react-dom/server";
import React from "react";
import glob from "fast-glob";
import path from "node:path";
class Loader {
  cache: any;
  app: any;
  constructor(app: any) {
    // this.cache = new LRU({
    //   max: 1000 * 60,
    //   maxSize: 2,
    // });
    this.app = app;
  }
  async loadModule(name: string, target: string) {
    const modules = glob.sync(target, {
      absolute: true,
    });

    // this.cache.set(moduleName, module);
    for (let module of modules) {
      const nameOfModulePath = path.parse(module).name;
      if (name === nameOfModulePath) {
        const content = await import(`file://${module}`);
        return content?.default ? content.default : content;
      }
    }
    console.log("✅ load module finish ...");
  }
}
export default Loader;
