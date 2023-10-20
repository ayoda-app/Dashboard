import { createRouter, createWebHistory } from "vue-router";
import DashboardView from "./components/views/DashboardView.vue";

const routes = [
    {
        path: "/",
        redirect: "/dashboard/predictions"
    },
    {
        path: "/dashboard/:section",
        component: DashboardView
    }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})


export default router;