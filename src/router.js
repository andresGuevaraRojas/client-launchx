import { createWebHistory, createRouter } from "vue-router";
const routes =  [
  {
    path: "/",
    alias: "/missionCommanders",
    name: "missioncommander-list",
    component: () => import("./components/missionCommanders/MissionCommaderList")
  },
  {
    path: "/explorer/:id",
    name: "explorer-details",
    component: () => import("./components/explorers/Explorer")
  },
  {
    path: "/add",
    name: "add-explorer",
    component: () => import("./components/explorers/AddExplorer")
  }
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
