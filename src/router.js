import { createRouter, createWebHistory } from "vue-router";
import PredictionsView from "./components/views/PredictionsView.vue";
import InsightsView from "./components/views/InsightsView.vue";
import OrdersView from "./components/views/OrdersView.vue";
import PastOrdersView from "./components/views/PastOrdersView.vue";

const routes = [
    {
        path: "/",
        redirect: "/predictions"
    },
    {
        name: "predictions",
        path: "/predictions",
        component: PredictionsView
    },
    {
        name: "insights",
        path: "/insights",
        component: InsightsView
    },
    {
        name: "orders",
        path: "/orders",
        component: OrdersView
    },
    {
        name: "past-orders",
        path: "/past-orders",
        component: PastOrdersView
    },
]

const router = createRouter({
  history: (
    process.env.NODE_ENV === "production"
        ? createWebHistory("/Dashboard/")
        : createWebHistory()
  ),
  routes,
})


export default router;