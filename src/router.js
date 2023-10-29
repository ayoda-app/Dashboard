import { createRouter, createWebHistory } from "vue-router";
import DashboardView from "./components/views/DashboardView.vue";

const routes = [
    {
        path: "/",
        redirect: "/page/predictions"
    },
    {
        path: "/page/:section",
        component: DashboardView
    }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})


export default router;