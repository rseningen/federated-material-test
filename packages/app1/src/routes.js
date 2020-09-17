import React from "react";
import App1 from "./app1";
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
];