import { createRouter, createWebHistory } from "vue-router";
import LoginView from "./components/views/LoginView.vue";
import PredictionsView from "./components/views/PredictionsView.vue";
import InsightsView from "./components/views/InsightsView.vue";
import OrdersView from "./components/views/OrdersView.vue";
import PastOrdersView from "./components/views/PastOrdersView.vue";
import PageNotFoundView from "./components/views/PageNotFoundView.vue";

const routes = [
    {
        path: "/",
        redirect: "/predictions"
    },
    {
        name: "login",
        path: "/login",
        component: LoginView
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
    {
        name: "page-not-found",
        path: "/:catchAll(.*)",
        component: PageNotFoundView
    }
]

const router = createRouter({
  history: (
    process.env.NODE_ENV === "production"
        ? createWebHistory("/Dashboard/")
        : createWebHistory("/")
  ),
  routes,
})

// Signed in navigation guard
router.beforeEach(async (to, from) => {
    
    const authToken = localStorage.getItem("authToken");
    // TODO: Should request API to check if the token is valid
    const isAuthenticated = authToken !== null;

    if (
        // Make sure the user is authenticated
        !isAuthenticated &&
        // Avoid an infinite redirect
        to.name !== "login"
    ){
        // redirect the user to the login page
        return { name: "login" }
    }
});


export default router;