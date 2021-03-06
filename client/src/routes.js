/*!

=========================================================
* Black Dashboard React v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.js";
import Goals from "views/Goals.js";

import NewGoal from "views/GoalInput.js";
import Login from "views/login.js"
import Motivation from "views/Motivation.js"


var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "tim-icons icon-chart-pie-36",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/goals",
    name: "View Goals",
    icon: "tim-icons icon-compass-05",
    component: Goals,
    layout: "/admin",
  },
  {
    path: "/newgoal",
    name: "New Goal",
    icon: "tim-icons icon-trophy",
    component: NewGoal,
    layout: "/admin",
  },
  {
    path: "/motivation",
    name: "Motivation",
    icon: "tim-icons icon-spaceship",
    component: Motivation,
    layout: "/admin",
  }
];
export default routes;
