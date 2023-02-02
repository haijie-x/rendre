import LRU from "lru-cache";
class Loader {
  cache: any;
  rendreVo: any;
  constructor(instance: any) {
    this.cache = new LRU({
      max: 1000 * 60,
      maxSize: 2,
    });
    this.rendreVo = instance;
  }
  async loadModule(moduleName: string) {
    const modulePath =
      `${this.rendreVo.config.buildDirname}/${moduleName}.bundle.js`
        .replace(/^(\C:|\D:)/, "")
        .replace(/\\/g, "/");

    const moduleContent = await import(
      "/Project/front/rendre/example/bundle/home.bundle.js"
    );
    // this.cache.set(moduleName, module);
    console.log(moduleContent);
  }
}
export default Loader;
