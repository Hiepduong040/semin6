import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./routes";
// Import Font Awesome CSS
import '@fortawesome/fontawesome-free/css/all.css';
import store from "./store/store";
// Import Boxicons CSS
import 'boxicons/css/boxicons.min.css';

const app = createApp(App);

app.use(router);
app.use(store);
app.mount("#app");
