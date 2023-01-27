import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { App } from "./App";

export function render(url: string, context: unknown) {
  return ReactDOMServer.renderToString(
    <StaticRouter location={url}>
      <App context={context} />
    </StaticRouter>
  );
}
