import ReactDom from "react-dom";
import Index from "../__default.app";
import routeList from "../views/index";

//渲染 index 组件 到页面
ReactDom.hydrate(
  <Index routeList={routeList} />,
  document.getElementById("root")
);
