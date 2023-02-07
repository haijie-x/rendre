import renderMiddleware from "./render";
import loadMiddleware from "./load";
import compose from "koa-compose";

export const middlewares = compose([loadMiddleware, renderMiddleware]);
