import React from "react";
import ReactDom from "react-dom";
import Index from "./__default.app";

//渲染 index 组件 到页面
ReactDom.hydrate(React.createElement(Index), document.getElementById("root"));
