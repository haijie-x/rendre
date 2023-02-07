const loadMiddleware = async (ctx, next) => {
  const url = ctx.url;
  const app = ctx.app;
  const viewName = url.replace(/^\/(.+)/, (_, s1) => s1);

  const view = await app.Loader.loadModule(viewName, ".rendre/server/*.js");

  if (view) {
    ctx.view = view?.default ? view.default : view;
  }
  next();
};
export default loadMiddleware;
