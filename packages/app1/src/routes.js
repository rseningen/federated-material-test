import React from "react";
import App1 from "./app1";
import App2 from "./app2";
import {Widgets} from "@material-ui/icons";

export const remoteRoutes = [
  {
    path: "/app1",
    component: App1,
    exact: true,
    title: "App1",
    icon: Widgets,
    showInMenu: true,
  },
  {
    path: "/app2",
    component: App2,
    exact: true,
    title: "App2",
    icon: Widgets,
    showInMenu: true,
  },
];