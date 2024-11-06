import { createRouter, createWebHistory } from "vue-router";

import enterpriseRouters from "./enterpriseRoutes";
import managerRouters from "./managerRoutes";

const routes = [...enterpriseRouters,...managerRouters];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;