import React from "react";
import ReactDom from "react-dom";

//组件
export default class Index extends React.Component {
  constructor(props: any) {
    super(props);
  }

  handlerClick() {
    alert("一起来玩 react ssr 啊");
  }

  render() {
    return React.createElement("button", {
      children: ["HELLO,WORLD"],
      onClick: this.handlerClick,
    });
  }
}

//渲染 index 组件 到页面
ReactDom.hydrate(React.createElement(Index), document.getElementById("root"));
