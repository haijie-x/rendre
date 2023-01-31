import { Link, Route, Routes } from "react-router-dom";
// Auto generates routes from files under ./pages
// https://vitejs.dev/guide/features.html#glob-import
const pages = import.meta.glob("./pages/*.jsx", { eager: true });

const routes = Object.keys(pages).map((path: string) => {
  const name = path.match(/\.\/pages\/(.*)\.jsx$/)?.[1];
  return {
    name,
    path: name === "Home" ? "/" : `/${name?.toLowerCase()}`,
    component: (pages[path] as { default: any }).default,
  };
});

export function App({ context }: { context?: any }) {
  return (
    <>
      <nav>
        <ul>
          {routes.map(({ name, path }) => {
            return (
              <li key={path}>
                <a href={path}>{name}</a>
              </li>
            );
          })}
        </ul>
      </nav>
      <h1>{JSON.stringify(context) || "have no context"}</h1>
      <Routes>
        {routes.map(({ path, component: RouteComp }) => {
          return <Route key={path} path={path} element={<RouteComp />}></Route>;
        })}
      </Routes>
    </>
  );
}
