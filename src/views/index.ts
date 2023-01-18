import Home from "./home";
import List from "./list";

const routeList = [
  {
    path: "/home",
    component: Home,
    exact: true, //是否精确匹配
  },
  {
    path: "/list",
    component: List,
    exact: true,
  },
];

export default routeList;
