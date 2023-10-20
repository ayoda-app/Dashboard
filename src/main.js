import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/css/main.css";
// 3rd Party Components
import VueApexCharts from "vue3-apexcharts";
import Multiselect from "vue-multiselect";
// Fontawesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faReceipt } from "@fortawesome/free-solid-svg-icons";
import { faBoxArchive } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlassChart } from "@fortawesome/free-solid-svg-icons";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";


// Fontawesome add to library
library.add(faReceipt);
library.add(faBoxArchive);
library.add(faMagnifyingGlassChart);
library.add(faChartLine);

createApp(App)
.component("font-awesome-icon", FontAwesomeIcon)
.component("multiselect", Multiselect)
.use(router)
.use(VueApexCharts)
.mount("#app");
