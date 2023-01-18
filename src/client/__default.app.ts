import React from "react";

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
