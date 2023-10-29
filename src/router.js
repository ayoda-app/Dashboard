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
  history: createWebHistory(
    process.env.NODE_ENV === "production" ? "/Dashboard/" : "/"
  ),
  routes,
})


export default router;