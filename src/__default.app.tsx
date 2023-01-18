import React, { PropsWithChildren } from "react";
import { Link, Route } from "react-router-dom";

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <Link to="/home">首页</Link>
      <Link to="/list">列表页</Link>
      <div>{children}</div>
    </div>
  );
};

const App = ({ routeList }: { routeList: any }) => {
  return (
    <Layout>
      {routeList.map((item: any) => {
        return <Route key={item.path} {...item}></Route>;
      })}
    </Layout>
  );
};
export default App;
