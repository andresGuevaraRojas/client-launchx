import { createWebHistory, createRouter } from "vue-router";
const routes =  [
  {
    path: "/",
    alias: "/missionCommanders",
    name: "missioncommanders",
    component: () => import("./components/missionCommanders/MissionCommaderList")
  },
  {
    path: "/missionCommander/:id",
    name: "missionCommander-details",
    component: () => import("./components/missionCommanders/MissionCommander")
  },
  {
    path: "/add",
    name: "add-missionCommander",
    component: () => import("./components/missionCommanders/AddMissionCommander")
  }
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
