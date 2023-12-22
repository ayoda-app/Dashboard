import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/css/main.css";
// 3rd Party Components
import VueApexCharts from "vue3-apexcharts";
import Multiselect from "vue-multiselect";
// Fontawesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
    faReceipt,
    faBoxArchive,
    faMagnifyingGlassChart,
    faChartLine,
    faArrowRightFromBracket
} from "@fortawesome/free-solid-svg-icons";


// Fontawesome add to library
library.add(faReceipt);
library.add(faBoxArchive);
library.add(faMagnifyingGlassChart);
library.add(faChartLine);
library.add(faArrowRightFromBracket);

createApp(App)
.component("font-awesome-icon", FontAwesomeIcon)
.component("multiselect", Multiselect)
.use(router)
.use(store)
.use(VueApexCharts)
.mount("#app");
